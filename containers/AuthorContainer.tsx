import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Author.module.scss";
// import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";
import axios from "axios";
import { BookProps, AuthorProps } from "../utils/typings";
import Image from "next/image";

function AuthorContainer({ author }: { author: AuthorProps }) {
  const router = useRouter();
  const [books, setBooks] = useState<BookProps[]>([]);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);

  const authorSlug = router.query.slug;

  const getBooksByAuthor = () => {
    axios
      .post("/api/books/getByAuthor", {
        authorId: author.authorId,
      })
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBookClick = (book: any) => {
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
      <div className={styles.author__page}>
        <div className={styles.author__tag}>
          <div className={styles.author__image}>
            <Image
              className={styles.author__image}
              src={author.img}
              alt="author image"
              width={80}
              height={80}
              objectFit="cover"
            />
          </div>
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
                <div className={styles.book__layout}>
                  <Image
                    src={book.img}
                    alt="book image"
                    width={80}
                    height={114}
                    objectFit="contain"
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

export default AuthorContainer;
