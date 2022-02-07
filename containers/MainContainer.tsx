import { useEffect } from "react";
import TopMain from "../components/TopMain";
import Authors from "../components/Authors";
import NewAdded from "../components/NewAdded";
import Popular from "../components/Popular";
import styles from "../styles/MainContainer.module.scss";
import { HomeProps } from "../utils/typings";
import dbConnect from "../utils/mongo";
import Author from "../models/Author";
import axios from "axios";

function MainContainer({ books, authors }: HomeProps) {
  return (
    <div className={styles.main__container}>
      <TopMain />
      <Authors authors={authors} />
      <NewAdded books={books} />
      <Popular books={books} />
    </div>
  );
}

export default MainContainer;
