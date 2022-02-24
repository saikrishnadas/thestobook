import React, { useState, useEffect } from "react";
import styles from "../styles/MainContainer.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { searchAtom } from "../atoms/searchedBooks";

//@ts-ignore
import Cookies from "js-cookie";

function TopMain() {
  const router = useRouter();
  const searchBooks = useSetRecoilState(searchAtom);
  const [search, setSearch] = useState<string | null>(null);

  const searchIconStyle = {
    width: "25px",
    height: "25px",
    color: "#02020252",
  };

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await axios.post("/api/books/search", {
      search: search,
    });
    // console.log(resp.data);
    searchBooks(resp.data);
    Cookies.set("serachBooks", resp.data);
    router.push("/sbooks");
  };

  return (
    <div className={styles.top__container}>
      <h2>Explore</h2>
      <form onSubmit={onSearch}>
        <div className={styles.search__bar__container}>
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#ffffff",
              cursor: "pointer",
            }}
            type="submit"
          >
            <SearchIcon style={searchIconStyle} />
          </button>

          <input
            placeholder="Search to find a book"
            className={styles.search__bar}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default TopMain;
