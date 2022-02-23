import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/LogoutModal.module.scss";

type LogoutModalProps = {
  logoutModal: boolean;
  handleClose: () => void;
  handleLogout: () => void;
};

function LogoutModal({
  logoutModal,
  handleClose,
  handleLogout,
}: LogoutModalProps) {
  const logoutModalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 50,
    borderRadius: 3,
    p: 4,
  };

  return (
    <>
      <Modal
        open={logoutModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box__container}>
          <div className={styles.modal__container}>
            <div className={styles.modal__details}>
              <p>Are you sure you want to logout ?</p>
              <div className={styles.modal__button} onClick={handleLogout}>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default LogoutModal;
