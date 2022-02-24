import styles from "../../styles/AuthorPage.module.scss";
import dbConnect from "../../utils/mongo";
import Author from "../../models/Author";
import NavContainer from "../../containers/NavContainer";
import { useRouter } from "next/router";
import { HomeProps, AuthorProps } from "../../utils/typings";
import HeadTag from "../../components/HeadTag";
import Image from "next/image";

function index({ authors }: HomeProps) {
  const router = useRouter();

  const handleAuthorClick = (slug: string) => {
    router.push(`author/${slug}`);
  };

  return (
    <>
      <HeadTag title="Authors" />
      <div style={{ display: "flex" }}>
        <NavContainer />
        <div style={{ height: "100vh", width: "65%" }}>
          <div className={styles.author__tag}>
            <p>Authors</p>
          </div>
          <div className={styles.author__container}>
            {authors?.map((author: AuthorProps) => {
              return (
                <div
                  className={styles.author__card}
                  key={author._id}
                  onClick={() => handleAuthorClick(author.slug)}
                >
                  <div className={styles.author__layout}>
                    <div className={styles.author__image}>
                      <Image
                        src={author.img}
                        alt="author image"
                        width={104}
                        height={140}
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  <p>{author.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

export async function getStaticProps() {
  await dbConnect();

  const resp = await Author.find({});

  const authors = JSON.parse(JSON.stringify(resp));

  return {
    props: {
      authors,
    },
    revalidate: 300,
  };
}
