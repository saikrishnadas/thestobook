import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/BookOpenModal.module.scss";
import { useRouter } from "next/router";
import { BookProps } from "../utils/typings";
import axios from "axios";

// @ts-ignore
import Cookies from "js-cookie";

type BookOpenModalProps = {
  open: boolean;
  book: BookProps;
  handleClose: () => void;
};

function BookOpenModal({ open, book, handleClose }: BookOpenModalProps) {
  const router = useRouter();

  const bookStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 50,
    borderRadius: 3,
    p: 4,
  };

  const currentBook = () => {
    const { name, slug, category, author, authorId, img } = book;
    const userInfo = Cookies.get("userInfo")
      ? JSON.parse(Cookies.get("userInfo"))
      : null;
    const user = userInfo?.email;
    axios
      .post("/api/books/currentBook", {
        name: name,
        slug: slug,
        category: category,
        author: author,
        authorId: authorId,
        img: img,
        user: user,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    currentBook();
    router.push("/reading");
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={bookStyle}>
          <div className={styles.modal__container}>
            <img src={book?.img} alt={book?.slug} />
            <div className={styles.modal__details}>
              <span>{book?.name}</span>
              <span>{book?.author}</span>
              <div className={styles.modal__button} onClick={handleButtonClick}>
                <p>Start Reading</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default BookOpenModal;
