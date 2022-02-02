import TopMain from "./TopMain";
import Authors from "./Authors";
import NewAdded from "./NewAdded";
import Popular from "./Popular";
import styles from "../styles/MainContainer.module.scss";

function MainContainer() {
  return (
    <div className={styles.main__container}>
      <TopMain />
      <Authors />
      <NewAdded />
      <Popular />
    </div>
  );
}

export default MainContainer;
