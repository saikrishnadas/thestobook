import TextField from "@mui/material/TextField";
import styles from "../styles/MainContainer.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "material-ui-search-bar";

function TopMain() {
  return (
    <div className={styles.top__container}>
      <h2>Explore</h2>
      <SearchBar
        placeholder="Search to find a book"
        className={styles.input}
        // value={searched}
        // onChange={(searchVal) => requestSearch(searchVal)}
        // onCancelSearch={() => cancelSearch()}
      />
    </div>
  );
}

export default TopMain;
