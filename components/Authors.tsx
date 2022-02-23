import styles from "../styles/MainContainer.module.scss";
import Link from "next/link";
import { HomeProps } from "../utils/typings";

function Authors({ authors }: HomeProps) {
  return (
    <div className={styles.author__container}>
      {authors?.map((author) => {
        return (
          <Link href={`author/${author.slug}`} key={author._id}>
            <div className={styles.author__card}>
              <img src={author.img} alt="author image" />
              <p>{author.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Authors;
