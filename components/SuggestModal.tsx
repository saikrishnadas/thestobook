import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/SuggestModal.module.scss";

function SuggestModal({ openSuggest, handleSuggestClose, makeSuggest }: any) {
  const bookStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    width: 550,
    height: 280,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 50,
    borderRadius: 3,
    p: 4,
  };
  return (
    <>
      <Modal
        open={openSuggest}
        onClose={handleSuggestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={bookStyle}>
          <div className={styles.modal__container}>
            <div className={styles.modal__details}>
              <p>Enter the name of the book</p>
              <form onSubmit={makeSuggest}>
                <input placeholder="enter the name" />
                <button className={styles.modal__button} type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default SuggestModal;
