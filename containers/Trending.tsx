import Authors from "../components/Authors";
import styles from "../styles/MainContainer.module.scss";
import classes from "../styles/Trending.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
// import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";
import Link from "next/link";
import { BookProps, HomeProps } from "../utils/typings";

function Trending({ authors, books }: HomeProps) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);

  const handleBookClick = (book: BookProps) => {
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };
  return (
    <div className={styles.main__container}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "10px",
        }}
      >
        <p className={classes.explore__author__tag}>Explore Authors</p>{" "}
        <Link href="/author">
          <div style={{ cursor: "pointer" }}>View More</div>
        </Link>
      </span>
      <Authors authors={authors} />
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div>
        <div className={classes.saved__tag}>
          <p>Trending</p>
        </div>
        <div className={classes.saved__book__container}>
          {books?.map((book: BookProps) => {
            return (
              <div
                className={classes.book__card}
                key={book._id}
                onClick={() => handleBookClick(book)}
              >
                <div className={classes.book__layout}>
                  <img src={book.img} alt="book image" />
                </div>

                <p>{book.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
