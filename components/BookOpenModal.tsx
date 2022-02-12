import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../styles/BookOpenModal.module.scss";
import { useRouter } from "next/router";
import { BookProps } from "../utils/typings";
import {useSetRecoilState} from "recoil";
import {bookAtom} from "../atoms/bookAtom";
import Cookies from "js-cookie";

type BookOpenModalProps = {
  open: boolean;
  book: BookProps;
  handleClose: () => void;
};

function BookOpenModal({ open, book, handleClose }: BookOpenModalProps) {
  const router = useRouter();
  const currentBook = useSetRecoilState(bookAtom);

  const bookStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 619,
    height: 303,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 50,
    borderRadius: 3,
    p: 4,
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("Reading....");
    currentBook(book);
    Cookies.set("currentBook",book);
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
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {book?.name}
          </Typography> */}
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
