import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/NavContainer";
import NavContainer from "../components/NavContainer";
import MainContainer from "../components/MainContainer";

const Home: NextPage = () => {
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
        <MainContainer />
      </div>
    </div>
  );
};

export default Home;
