import Profile from "./Profile";
import MenuSelect from "./MenuSelect";
import styles from "../styles/NavContainer.module.scss";
import Current from "./Current";

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
