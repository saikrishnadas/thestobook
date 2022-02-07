import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Author.module.scss";
// import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";
import axios from "axios";
import { BookProps, AuthorProps } from "../utils/typings";

function AuthorContainer({ author }: { author: AuthorProps }) {
  console.log("author", author);
  const router = useRouter();
  const [books, setBooks] = useState<BookProps[]>([]);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);

  const authorSlug = router.query.slug;
  console.log(authorSlug);

  const getBooksByAuthor = () => {
    axios
      .post("/api/books/getByAuthor", {
        authorId: author.authorId,
      })
      .then(function (response) {
        console.log(response);
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBookClick = (book: BookProps) => {
    console.log(book);
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };

  useEffect(() => {
    getBooksByAuthor();
  }, []);

  return (
    <>
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div style={{ height: "100vh", width: "65%" }}>
        <div className={styles.author__tag}>
          <img src={author.img} alt="" />
          <p>{author.name}</p>
        </div>
        <div className={styles.author__book__container}>
          {books.map((book) => {
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

export default AuthorContainer;
