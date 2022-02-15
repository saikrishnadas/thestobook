import { useState, useRef } from "react";
import styles from "../styles/MainContainer.module.scss";
import BookOpenModal from "./BookOpenModal";
// import { BookType } from "../containers/AuthorContainer";
import { HomeProps } from "../utils/typings";
import { BookProps } from "../utils/typings";
import ProgressBar from "./ProgressBar";

function Popular({ books }: HomeProps) {
  const scrollRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);
  const [popularBooks, setPopularBooks] = useState<BookProps[] | null>(null);
  const [progress, setProgress] = useState(0);

  // const { colors } = useImageColor(
  //   "https://images-na.ssl-images-amazon.com/images/I/51FqtXUscFL.jpg",
  //   { cors: true, colors: 5 }
  // );
  // const myColor = colors[0];
  // console.log(colors);

  const handleBookClick = (book: BookProps) => {
    console.log(book);
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };

  const onClickScroll = (scrollOffset: any) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleProgress = (arrow: any) => {
    if (arrow === "minus") {
      setProgress(progress - 20);
    } else {
      setProgress(progress + 20);
    }
  };

  return (
    <>
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div className={styles.popular__container} style={{ marginTop: "2em" }}>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Popular Now</h3>
          <ProgressBar
            onClickScroll={onClickScroll}
            handleProgress={handleProgress}
            progress={progress}
          />
        </span>
        <div className={styles.book__container} ref={scrollRef}>
          {books?.slice(-5).map((book: BookProps) => {
            return (
              <div
                className={styles.book__card}
                key={book._id}
                onClick={() => handleBookClick(book)}
              >
                <div
                  className={styles.book__layout}
                  // style={{ backgroundColor: myColor }}
                >
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

export default Popular;
