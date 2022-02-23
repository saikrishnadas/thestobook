import type { NextPage } from "next";
import Head from "next/head";
import NavContainer from "../containers/NavContainer";
import MainContainer from "../containers/MainContainer";
import dbConnect from "../utils/mongo";
import Book from "../models/Book";
import { HomeProps } from "../utils/typings";
import Author from "../models/Author";
import styles from "../styles/Home.module.scss";

const Home: NextPage<HomeProps> = ({ books, authors }) => {
  return (
    <div>
      <Head>
        <title>The Stobook</title>
        <meta
          name="description"
          content="The Stobook is an open library where you can read any book for free. It features a customizable auto function that suggests depending on user preferences."
        />
        <link rel="icon" type="image/x-icon" href="/book.ico" />
      </Head>
      <div className={styles.index__container}>
        <NavContainer />
        <MainContainer books={books} authors={authors} />
      </div>
    </div>
  );
};

export default Home;

//Incremental Static Generation
export async function getStaticProps() {
  await dbConnect();

  const resp_books = await Book.find({});
  const resp_authors = await Author.find({});

  const books = JSON.parse(JSON.stringify(resp_books));
  const authors = JSON.parse(JSON.stringify(resp_authors));
  return {
    props: {
      books,
      authors,
    },
    revalidate: 3600,
  };
}
