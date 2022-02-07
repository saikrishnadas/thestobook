import { useState, useEffect } from "react";
import Book from "../../models/Book";
import dbConnect from "../../utils/mongo";
import BookOpenModal from "../../components/BookOpenModal";
import styles from "../../styles/Author.module.scss";
import { useRouter } from "next/router";
import NavContainer from "../../containers/NavContainer";
import { BookProps } from "../../utils/typings";

function Category({ books }: any) {
  const router = useRouter();
  const { category } = router.query;
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookProps | null>(null);

  const handleBookClick = (book: BookProps) => {
    console.log(book);
    setBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBook(null);
  };
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div style={{ height: "100vh", width: "65%" }}>
        <div className={styles.author__tag}>
          <p>{category}</p>
        </div>
        <div className={styles.author__book__container}>
          {books.map((book: BookProps) => {
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
    </div>
  );
}

export default Category;

export async function getServerSideProps({ query }: any) {
  const { category } = query;
  await dbConnect();

  const resp = await Book.find({ category: category });
  const books = JSON.parse(JSON.stringify(resp));
  return {
    props: {
      books,
    },
  };
}
