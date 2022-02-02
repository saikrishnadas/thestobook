import styles from "../styles/MainContainer.module.scss";
import Link from "next/link";
import { authors } from "../utils/data";

function Authors() {
  return (
    <div className={styles.author__container}>
      {authors.map((author) => {
        return (
          <Link href={`author/${author.slug}`} key={author.id}>
            <div className={styles.author__card}>
              <img src={author.img} alt={author.slug} />
              <p>{author.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Authors;
