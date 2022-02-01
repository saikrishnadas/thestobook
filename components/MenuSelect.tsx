import styles from "../styles/NavContainer.module.scss";

function MenuSelect() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <p>Explore</p>
        <p>{`>`}</p>
      </div>
      <div className={styles.menuItem}>
        <p>Categories</p>
        <p>{`>`}</p>
      </div>
      <div className={styles.menuItem}>
        <p>Saved</p>
        <p>{`>`}</p>
      </div>
      <div className={styles.menuItem}>
        <p>Trending</p>
        <p>{`>`}</p>
      </div>
    </div>
  );
}

export default MenuSelect;
