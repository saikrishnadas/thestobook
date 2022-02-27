import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "../styles/LoginPage.module.scss";
function SampleUser({ sampleUserModal, handleSampleUserClose }: any) {
  return (
    <>
      <Modal
        open={sampleUserModal}
        onClose={handleSampleUserClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.sample__box__container}>
          <span>
            <p>Email:</p>
            <p>user@test.com</p>
          </span>
          <span>
            <p>Password:</p>
            <p>test@user</p>
          </span>
        </Box>
      </Modal>
    </>
  );
}

export default SampleUser;
