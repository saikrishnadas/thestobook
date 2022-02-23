import styles from "../styles/MainContainer.module.scss";
import Link from "next/link";
import { HomeProps } from "../utils/typings";
import Image from "next/image";

function Authors({ authors }: HomeProps) {
  return (
    <div className={styles.author__container}>
      {authors?.map((author) => {
        return (
          <Link href={`author/${author.slug}`} key={author._id}>
            <div className={styles.author__card}>
              <div className={styles.author__image}>
                <Image
                  src={author.img}
                  alt="author image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p>{author.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Authors;
