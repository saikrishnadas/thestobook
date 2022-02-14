import { useState, useRef } from "react";
import styles from "../styles/MainContainer.module.scss";
// import { books } from "../utils/data";
import BookOpenModal from "./BookOpenModal";
// import { BookType } from "../containers/AuthorContainer";
import { HomeProps } from "../utils/typings";
import { BookProps } from "../utils/typings";
import Progress from "./progress";

// @ts-ignore
import useImageColor from "use-image-color";

function NewAdded({ books }: HomeProps) {
  const scrollRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);
  const [progress, setProgress] = useState(0);

  // const [color, setColor] = useState([
  //   "#df342b84",
  //   "#e6be9688",
  //   "#50ada496",
  //   "#0b385b83",
  //   "#efb91689",
  //   "#e4b8aa7d",
  //   "#daa5b87a",
  //   "#efe9e178",
  //   "#6004047a",
  //   "#3644296f",
  //   "#093b4d71",
  // ]);
  // const { colors } = useImageColor(
  //   "https://images-na.ssl-images-amazon.com/images/I/5177uhHF7VL._SX335_BO1,204,203,200_.jpg",
  //   { cors: true, colors: 5 }
  // );
  // var myColor = "";
  // if (colors) {
  //   myColor = colors[0];
  // }
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
      <div className={styles.newadded__container}>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Newly Added</h3>
          {/* <span style={{ display: "flex", alignItems: "center" }}>
            <img
              src={leftarrow.src}
              style={{ cursor: "pointer", opacity: "0.5" }}
              onClick={() => {
                onClickScroll(-100);
                setProgress(progress - 20);
              }}
            />
            <img
              src={rightarrow.src}
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClickScroll(100);
                setProgress(progress + 20);
              }}
            />
            <Box sx={{ width: "161px" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </span> */}
          <Progress
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
    </>
  );
}

export default NewAdded;
