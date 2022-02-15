import { useState } from "react";
import NavContainer from "../containers/NavContainer";
import styles from "../styles/Search.module.scss";
// import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";
// import { BookType } from "../containers/AuthorContainer";
import { HomeProps } from "../utils/typings";
import { BookProps } from "../utils/typings";
import dbConnect from "../utils/mongo";
import Book from "../models/Book";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { searchAtom } from "../atoms/searchedBooks";
import TopMain from "../components/TopMain";
import SuggestModal from "../components/SuggestModal";

function Sbooks() {
  const searchBooks = useRecoilValue(searchAtom);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);
  const [openSuggest, setOpenSuggest] = useState(false);

  console.log("searchBooks:", searchBooks);

  const handleBookClick = (book: BookProps) => {
    console.log(book);
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };

  const handleSuggestClick = () => {
    console.log("Sggest a book");
    setOpenSuggest(true);
  };

  const handleSuggestClose = () => {
    setOpenSuggest(false);
  };

  const makeSuggest = (e: any) => {
    e.preventDefault();
    console.log("You made a suggestion ");
    setOpenSuggest(false);
  };

  return (
    <>
      <SuggestModal
        openSuggest={openSuggest}
        handleSuggestClose={handleSuggestClose}
        makeSuggest={makeSuggest}
      />
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div style={{ display: "flex" }}>
        <NavContainer />

        <div style={{ height: "100vh", width: "65%" }}>
          <TopMain />
          <span style={{ display: "flex", marginLeft: "3%" }}>
            <p>Couldn't find the book?</p>
            <p
              style={{
                marginLeft: "5px",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handleSuggestClick}
            >
              {" "}
              Suggest a book to add.
            </p>
          </span>
          <div className={styles.saved__book__container}>
            {searchBooks?.map((book: any) => {
              return (
                <div
                  className={styles.book__card}
                  key={book._id}
                  onClick={() => handleBookClick(book)}
                >
                  <div
                    className={styles.book__layout}
                    // style={{ backgroundColor: `${color[index]}` }}
                  >
                    <img src={book.img} alt={book.slug} />
                  </div>

                  <p>{book.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sbooks;
