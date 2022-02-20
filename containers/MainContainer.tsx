import TopMain from "../components/TopMain";
import Authors from "../components/Authors";
import BooksContainer from "../components/BooksContainer";
import styles from "../styles/MainContainer.module.scss";
import { HomeProps } from "../utils/typings";
import Link from "next/link";

function MainContainer({ books, authors }: HomeProps) {
  return (
    <div className={styles.main__container}>
      <TopMain />
      <Link href="/author">
        <p className={styles.view__more}>View More</p>
      </Link>
      <Authors authors={authors} />
      <BooksContainer title="Newly Added" books={books!} />
      <BooksContainer title="Popular" books={books!} />
    </div>
  );
}

export default MainContainer;
