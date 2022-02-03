import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BookType } from "../components/AuthorContainer";
import styles from "../styles/BookOpenModal.module.scss";

type BookOpenModalProps = {
  open: boolean;
  book: BookType;
  handleClose: () => void;
};

function BookOpenModal({ open, book, handleClose }: BookOpenModalProps) {
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

  const handleButtonClick = () => {
    console.log("Reading....");
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
              <p>{book?.name}</p>
              <p>Chetan Bagat</p>
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
