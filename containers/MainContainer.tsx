import TopMain from "../components/TopMain";
import Authors from "../components/Authors";
import NewAdded from "../components/NewAdded";
import Popular from "../components/Popular";
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
