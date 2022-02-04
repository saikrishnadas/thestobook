import styles from "../styles/NavContainer.module.scss";
import Link from "next/link";

function Current() {
  return (
    <div className={styles.current__container}>
      <h3>Current Reading Book</h3>
      <Link href="reading">
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
      </Link>
    </div>
  );
}

export default Current;
