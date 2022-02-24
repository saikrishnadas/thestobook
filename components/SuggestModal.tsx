import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/SuggestModal.module.scss";

type SuggestModalProps = {
  openSuggest: boolean;
  handleSuggestClose: () => void;
  makeSuggest: (
    e: React.FormEvent<HTMLFormElement>,
    bookSuggestion: string
  ) => void;
};

function SuggestModal({
  openSuggest,
  handleSuggestClose,
  makeSuggest,
}: SuggestModalProps) {
  const [bookSuggestion, setBookSuggestion] = useState("");

  return (
    <>
      <Modal
        open={openSuggest}
        onClose={handleSuggestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box__container}>
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
