import { useState, useEffect } from "react";
import NavContainer from "../containers/NavContainer";
import styles from "../styles/Search.module.scss";
import BookOpenModal from "../components/BookOpenModal";
import { BookProps } from "../utils/typings";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { searchAtom } from "../atoms/searchedBooks";
import TopMain from "../components/TopMain";
import SuggestModal from "../components/SuggestModal";
import HeadTag from "../components/HeadTag";
import Image from "next/image";

function Sbooks() {
  const searchBooks = useRecoilValue(searchAtom);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);
  const [openSuggest, setOpenSuggest] = useState(false);

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

  const makeSuggest = (
    e: React.FormEvent<HTMLFormElement>,
    bookSuggestion: string
  ) => {
    e.preventDefault();
    console.log("You made a suggestion ", bookSuggestion);

    axios
      .post("/api/suggestion", { name: bookSuggestion })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setOpenSuggest(false);
  };

  useEffect(() => {
    console.log(searchBooks);
  }, []);

  return (
    <>
      <HeadTag title="The Stobook" />
      <SuggestModal
        openSuggest={openSuggest}
        handleSuggestClose={handleSuggestClose}
        makeSuggest={makeSuggest}
      />
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div style={{ display: "flex" }}>
        <NavContainer />

        <div className={styles.suggestion__page}>
          <TopMain />
          <span className={styles.suggestion__p}>
            <p>Couldn't find the book?</p>
            <p data-testid="openSuggestionBox" onClick={handleSuggestClick}>
              Suggest a book to add.
            </p>
          </span>
          <div className={styles.saved__book__container}>
            {searchBooks?.map((book: BookProps) => {
              return (
                <div
                  className={styles.book__card}
                  key={book._id}
                  onClick={() => handleBookClick(book)}
                >
                  <div className={styles.book__layout}>
                    <Image
                      src={book.img}
                      alt="book image"
                      width={77}
                      height={118}
                      objectFit="cover"
                    />
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
