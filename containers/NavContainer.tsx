import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import MenuSelect from "../components/MenuSelect";
import styles from "../styles/NavContainer.module.scss";
import Current from "../components/Current";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";
import axios from "axios";

function NavContainer() {
  const userInfo = useRecoilValue(userAtom);
  const [currentBook, setCurrentBook] = useState<any>();

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
  }, [currentBook]);

  return (
    <div className={styles.container}>
      <Profile />
      <MenuSelect />
      {userInfo ? (
        <Current currentBook={currentBook} />
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
    </div>
  );
}

export default NavContainer;
