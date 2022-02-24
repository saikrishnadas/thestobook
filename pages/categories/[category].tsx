import { useState } from "react";
import Book from "../../models/Book";
import dbConnect from "../../utils/mongo";
import BookOpenModal from "../../components/BookOpenModal";
import styles from "../../styles/Author.module.scss";
import { useRouter } from "next/router";
import NavContainer from "../../containers/NavContainer";
import { BookProps } from "../../utils/typings";
import { HomeProps } from "../../utils/typings";
import HeadTag from "../../components/HeadTag";

function Category({ books }: HomeProps) {
  const router = useRouter();
  const { category } = router.query;
  const title = String(category);
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
    <>
      <HeadTag title={title} />
      <div style={{ display: "flex" }}>
        <NavContainer />
        <BookOpenModal open={open} handleClose={handleClose} book={book!} />
        <div className={styles.author__page}>
          <div className={styles.author__tag}>
            <p>{category}</p>
          </div>
          <div className={styles.author__book__container}>
            {books?.map((book: BookProps) => {
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
                    <img src={book.img} alt="book image" />
                  </div>

                  <p>{book.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { category: "actionandadventure" } },
      { params: { category: "fantasy" } },
      { params: { category: "crime" } },
      { params: { category: "romance" } },
      { params: { category: "non-fiction" } },
      { params: { category: "science-fiction" } },
    ],
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  await dbConnect();

  const resp = await Book.find({ category: category });
  const books = JSON.parse(JSON.stringify(resp));
  return {
    props: {
      books,
    },
    revalidate: 3600,
  };
}
