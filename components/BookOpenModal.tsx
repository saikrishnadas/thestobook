import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BookType } from "../components/AuthorContainer";

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

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={bookStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {book?.name}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default BookOpenModal;
