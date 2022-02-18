import { useEffect } from "react";
import styles from "../styles/MenuMobile.module.scss";
import Profile from "../components/Profile";
import Link from "next/link";
import Current from "../components/Current";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { useSetRecoilState } from "recoil";
import { currentAtom } from "../atoms/currentAtom";
import axios from "axios";

//@ts-ignore
import Cookies from "js-cookie";
import MenuSelect from "./MenuSelect";

function MenuMobile({ handleMenuClose }: any) {
  const user = Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null;
  const userInfo = useRecoilValue(userAtom);
  const setCurrentBook = useSetRecoilState(currentAtom);
  const getCurrentBook = () => {
    axios
      .get("/api/books/currentBook")
      .then(function (response) {
        console.log(response);
        const found = response.data.filter(
          (el: any) => el.user === userInfo.email
        );
        console.log(found);
        if (found) {
          setCurrentBook(found[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Current Book render issue........");
    getCurrentBook();
  }, []);
  return (
    <div
      className={`${
        user ? styles.menu__container : styles.menu__container__nouser
      }`}
    >
      <>
        <Link href="/about">
          <p className={styles.about__us}>About The Stobook</p>
        </Link>
        <p className={styles.close} onClick={handleMenuClose}>
          Close
        </p>
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
          style={{
            fontSize: "8px",
            width: "100%",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          Copyright © The Stobook
        </p>
      </>
    </div>
  );
}

export default MenuMobile;
