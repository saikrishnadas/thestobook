import { useState } from "react";
import styles from "../styles/MainContainer.module.scss";
// import { books } from "../utils/data";
import BookOpenModal from "./BookOpenModal";
import { BookType } from "../containers/AuthorContainer";
import { HomeProps } from "../utils/typings";

// @ts-ignore
import useImageColor from "use-image-color";

function NewAdded({ books }: HomeProps) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);
  // const { colors } = useImageColor(
  //   "https://images-na.ssl-images-amazon.com/images/I/51FqtXUscFL.jpg",
  //   { cors: true, colors: 5 }
  // );
  // const myColor = colors[0];
  // console.log(colors);

  const handleBookClick = (book: any) => {
    console.log(book);
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };

  return (
    <>
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div className={styles.newadded__container}>
        <h3>Newly Added</h3>
        <div className={styles.book__container}>
          {books.map((book: any) => {
            return (
              <div
                className={styles.book__card}
                key={book.id}
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

export default NewAdded;
