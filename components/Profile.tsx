import styles from "../styles/NavContainer.module.scss";

function Profile() {
  return (
    <div className={styles.profile}>
      <div>
        <img
          src="https://miro.medium.com/fit/c/1360/1360/1*prGxEhjvfMxpeagLYWxA4w.jpeg"
          alt="sai"
        />
      </div>
      <div className={styles.profile__name}>
        <h4>SAI KRISHNA DAS</h4>
        <p>Premium Member</p>
      </div>
    </div>
  );
}

export default Profile;
