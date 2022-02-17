import { useState, useEffect } from "react";
import styles from "../styles/NavContainer.module.scss";
import Link from "next/link";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { currentAtom } from "../atoms/currentAtom";

function Current() {
  const currentBook = useRecoilValue<any>(currentAtom);

  return (
    <div className={styles.current__container}>
      <h3>Current Reading Book</h3>
      <Link href="reading">
        <div className={styles.current__reading}>
          <img src={currentBook?.img} alt="currentbook" />
          <div>
            <p>{currentBook?.name}</p>
            <p>{currentBook?.author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Current;
