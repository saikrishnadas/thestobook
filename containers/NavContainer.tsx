import Profile from "../components/Profile";
import MenuSelect from "../components/MenuSelect";
import styles from "../styles/NavContainer.module.scss";
import Current from "../components/Current";

function NavContainer() {
  return (
    <div className={styles.container}>
      <Profile />
      <MenuSelect />
      <Current />
    </div>
  );
}

export default NavContainer;
