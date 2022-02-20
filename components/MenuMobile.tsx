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
import MenuSelect from "./MenuSelect";
import { BookProps } from "../utils/typings";

//@ts-ignore
import Cookies from "js-cookie";

type MenuMobileProps = {
  handleMenuClose: () => void;
};

function MenuMobile({ handleMenuClose }: MenuMobileProps) {
  const user = Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null;
  const userInfo = useRecoilValue(userAtom);
  const setCurrentBook = useSetRecoilState(currentAtom);
  const getCurrentBook = () => {
    axios
      .get("/api/books/currentBook")
      .then(function (response) {
        const found = response.data.filter(
          (el: BookProps) => el.user === userInfo.email
        );
        if (found) {
          setCurrentBook(found[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
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
        {userInfo && <Current />}

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
