import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/SuggestModal.module.scss";

function SuggestModal({ openSuggest, handleSuggestClose, makeSuggest }: any) {
  const [bookSuggestion, setBookSuggestion] = useState("");
  const bookStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    width: 460,
    height: 260,
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
              <p>Enter the suggestion : </p>
              <form onSubmit={(e) => makeSuggest(e, bookSuggestion)}>
                <input
                  style={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "6px",
                    paddingLeft: "10px",
                  }}
                  placeholder="Book Name"
                  onChange={(e) => setBookSuggestion(e.target.value)}
                />
                <button className={styles.modal__button} type="submit">
                  Submit
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