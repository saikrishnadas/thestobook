import { useState } from "react";
import styles from "../styles/Saved.module.scss";
import BookOpenModal from "../components/BookOpenModal";

export type BookType = {
  id: number;
  name: string;
  slug: string;
  author: string;
  img: string;
};

function SavedContainer() {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<any | null>(null);

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
      <div style={{ height: "100vh", width: "65%" }}>
        <div className={styles.saved__tag}>
          <p>Saved</p>
        </div>
      </div>
    </>
  );
}

export default SavedContainer;
