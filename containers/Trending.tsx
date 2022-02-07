import Authors from "../components/Authors";
import styles from "../styles/MainContainer.module.scss";
import classes from "../styles/Trending.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
// import { books } from "../utils/data";
import BookOpenModal from "../components/BookOpenModal";
import Link from "next/link";

export type BookType = {
  _id: string;
  name: string;
  slug: string;
  author: string;
  authorId: string;
  img: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

function Trending({ authors, books }: any) {
  //   const router = useRouter();
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);

  //   const savedSlug = router.query.slug;
  //   console.log(savedSlug);

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
    <div className={styles.main__container}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <p className={classes.explore__author__tag}>Explore Authors</p>{" "}
        {/* <Link href="/author">
          <div style={{ cursor: "pointer" }}>View More</div>
        </Link> */}
      </span>
      <Authors authors={authors} />
      <BookOpenModal open={open} handleClose={handleClose} book={book!} />
      <div>
        <div className={classes.saved__tag}>
          <p>Trending</p>
        </div>
        <div className={classes.saved__book__container}>
          {books.map((book: any) => {
            return (
              <div
                className={classes.book__card}
                key={book._id}
                onClick={() => handleBookClick(book)}
              >
                <div
                  className={classes.book__layout}
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

export default Trending;
