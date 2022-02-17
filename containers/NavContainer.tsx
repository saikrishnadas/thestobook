import Profile from "../components/Profile";
import MenuSelect from "../components/MenuSelect";
import styles from "../styles/NavContainer.module.scss";
import Current from "../components/Current";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { currentAtom } from "../atoms/currentAtom";
import { useEffect } from "react";
import Link from "next/link";

function NavContainer() {
  const userInfo = useRecoilValue(userAtom);
  const setCurrentBook = useSetRecoilState(currentAtom);

  const getCurrentBook = () => {
    axios
      .get("/api/books/currentBook")
      .then(function (response) {
        console.log(response);
        setCurrentBook(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCurrentBook();
  }, [setCurrentBook]);

  return (
    <>
      <div className={styles.container}>
        <Link href="/about">
          <p className={styles.about__us}>About The Stobook</p>
        </Link>
        <Profile />
        <MenuSelect />
        {userInfo ? (
          <Current />
        ) : (
          <div
            className={styles.current__container}
            style={{ visibility: "hidden" }}
          >
            <h3>Current Reading Book</h3>

            <div className={styles.current__reading}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
                alt="bookimg"
              />
              <div>
                <p>The girl in room 105</p>
                <p>Chetan Bagat</p>
              </div>
            </div>
          </div>
        )}

        <p
          className={styles.footer__copyright}
          style={{ fontSize: "12px", margin: "0" }}
        >
          Copyright © The Stobook
        </p>
      </div>
    </>
  );
}

export default NavContainer;
