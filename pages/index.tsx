import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../containers/NavContainer";
import NavContainer from "../containers/NavContainer";
import MainContainer from "../containers/MainContainer";
import dbConnect from "../utils/mongo";
import Book from "../models/Book";

const Home: NextPage = ({ books }: any) => {
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
        <MainContainer books={books} />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  await dbConnect();

  const resp = await Book.find({});
  const books = JSON.parse(JSON.stringify(resp));
  return {
    props: {
      books,
    },
  };
}
