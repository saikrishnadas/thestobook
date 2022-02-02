import TextField from "@mui/material/TextField";
import styles from "../styles/MainContainer.module.scss";

function TopMain() {
  return (
    <div className={styles.top__container}>
      <h2>Explore</h2>
      <TextField
        className={styles.input}
        id="outlined-search"
        label="Search to find a book"
        type="search"
      />
    </div>
  );
}

export default TopMain;
