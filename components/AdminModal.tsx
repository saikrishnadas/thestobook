import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/AdminModal.module.scss";
import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";

function AdminModal({ handleAdminClose, adminModal }: any) {
  const [showAuthor, setShowAuthor] = useState(false);
  const [showBook, setShowBook] = useState(false);

  const adminModalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1219,
    height: 703,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 50,
    borderRadius: 3,
    p: 4,
  };

  const handleAddAuthor = () => {
    setShowAuthor(true);
    setShowBook(false);
  };

  const handleAddBook = () => {
    setShowBook(true);
    setShowAuthor(false);
  };
  return (
    <>
      <Modal
        open={adminModal}
        onClose={handleAdminClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={adminModalStyle}>
          <div className={styles.admin__container}>
            <p className={styles.admin__menu} onClick={handleAddAuthor}>
              Add Author
            </p>
            <p className={styles.admin__menu} onClick={handleAddBook}>
              Add Book
            </p>
          </div>
          {showAuthor && <AddAuthor handleAdminClose={handleAdminClose} />}
          {showBook && <AddBook handleAdminClose={handleAdminClose} />}
        </Box>
      </Modal>
    </>
  );
}

export default AdminModal;
