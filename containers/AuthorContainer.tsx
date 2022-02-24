import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Author.module.scss";
import BookOpenModal from "../components/BookOpenModal";
import { BookProps, AuthorProps } from "../utils/typings";
import Image from "next/image";

type AuthorContainerProps = {
  author: AuthorProps;
  books: BookProps[];
};

function AuthorContainer({ author, books }: AuthorContainerProps) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);

  const handleBookClick = (book: any) => {
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
