import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Author.module.scss";
import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";

export type BookType = {
  id: number;
  name: string;
  slug: string;
  author: string;
  img: string;
};

function AuthorContainer({ author }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);

  const authorSlug = router.query.slug;
  console.log(authorSlug);

  const handleBookClick = (book: BookType) => {
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

export default AuthorContainer;
