import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../containers/NavContainer";
import NavContainer from "../containers/NavContainer";
import MainContainer from "../containers/MainContainer";
import dbConnect from "../utils/mongo";
import Book from "../models/Book";
import { HomeProps } from "../utils/typings";
import Author from "../models/Author";
import MenuIcon from "@mui/icons-material/Menu";
import MenuMobile from "../components/MenuMobile";

const Home: NextPage<HomeProps> = ({ books, authors }) => {
  return (
    <div>
      <Head>
        <title>The Stobook</title>
        <meta
          name="description"
          content="stobook is a free app that allows the user to read any book for free"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex" }}>
        <NavContainer />
        <MainContainer books={books} authors={authors} />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
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
  };
}
