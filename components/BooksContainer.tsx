import { useState, useRef } from "react";
import styles from "../styles/MainContainer.module.scss";
import BookOpenModal from "./BookOpenModal";
import { BookProps } from "../utils/typings";
import ProgressBar from "./ProgressBar";

type BooksContainerProps = {
  title: string;
  books: BookProps[];
};

function BooksContainer({ title, books }: BooksContainerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);
  const [progress, setProgress] = useState(0);

  const handleBookClick = (book: BookProps) => {
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };

  const onClickScroll = (scrollOffset: number) => {
    scrollRef!.current!.scrollLeft += scrollOffset;
  };

  const handleProgress = (arrow: string) => {
    if (arrow === "minus") {
      setProgress(progress - 20);
    } else {
      setProgress(progress + 20);
    }
  };

  return (
    <>
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div className={styles.newadded__container}>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>{title}</h3>
          <ProgressBar
            onClickScroll={onClickScroll}
            handleProgress={handleProgress}
            progress={progress}
          />
        </span>
        <div className={styles.book__container} ref={scrollRef}>
          {books?.map((book: BookProps) => {
            return (
              <div
                className={styles.book__card}
                key={book._id}
                onClick={() => handleBookClick(book)}
              >
                <div className={styles.book__layout}>
                  <img src={book.img} alt={book.slug} />
                </div>
                <p>{book.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BooksContainer;
