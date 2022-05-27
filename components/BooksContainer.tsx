import { useState, useRef } from "react";
import styles from "../styles/MainContainer.module.scss";
import BookOpenModal from "./BookOpenModal";
import { BookProps } from "../utils/typings";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

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
      <BookOpenModal
        open={open}
        handleClose={handleClose}
        book={book!}
        data-testid="bookmodal"
      />
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
          />
        </span>
        <div
          className={styles.book__container}
          ref={scrollRef}
          data-testid="bookcontainer"
        >
          {Array.isArray(books) &&
            books?.map((book: BookProps, index) => {
              return (
                <div
                  data-testid={`bookcontainer-${index}`}
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
    </>
  );
}

export default BooksContainer;
