import { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import MenuMobile from "../components/MenuMobile";
import { BookProps } from "../utils/typings";

function NavContainer() {
  const userInfo = useRecoilValue(userAtom);
  const setCurrentBook = useSetRecoilState(currentAtom);
  const [menu, setMenu] = useState(false);

  const getCurrentBook = async () => {
    await axios
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

  const handleMenu = () => {
    setMenu(true);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };

  // useEffect(() => {
  getCurrentBook();
  // }, []);

  return (
    <>
      {menu && <MenuMobile handleMenuClose={handleMenuClose} />}
      <span className={styles.menu__icon} onClick={handleMenu}>
        <MenuIcon />
      </span>
      <div className={styles.container}>
        <Link href="/about">
          <p className={styles.about__us}>About The Stobook</p>
        </Link>
        <Profile />
        <MenuSelect />
        {userInfo && <Current />}

        <p
          className={styles.footer__copyright}
          style={{ fontSize: "12px", margin: "0" }}
        >
          Copyrights © The Stobook
        </p>
      </div>
    </>
  );
}

export default NavContainer;
