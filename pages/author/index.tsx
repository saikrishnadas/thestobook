import styles from "../../styles/AuthorPage.module.scss";
import dbConnect from "../../utils/mongo";
import Author from "../../models/Author";
import NavContainer from "../../containers/NavContainer";
import { useRouter } from "next/router";
import { HomeProps, AuthorProps } from "../../utils/typings";

function index({ authors }: HomeProps) {
  const router = useRouter();

  const handleAuthorClick = (slug: string) => {
    router.push(`author/${slug}`);
  };

  return (
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
                <div
                  className={styles.author__layout}
                  // style={{ backgroundColor: myColor }}
                >
                  <img src={author.img} alt={author.slug} />
                </div>

                <p>{author.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  await dbConnect();

  const resp = await Author.find({});

  const authors = JSON.parse(JSON.stringify(resp));

  return {
    props: {
      authors,
    },
  };
}
