import styles from "../styles/NavContainer.module.scss";
import Link from "next/link";

function MenuSelect({ user }: any) {
  return (
    <div className={styles.menu}>
      <Link href="/">
        <div className={styles.menuItem}>
          <p>Explore</p>
          <p style={{ fontWeight: "normal" }}>{`>`}</p>
        </div>
      </Link>
      <Link href="/categories">
        <div className={styles.menuItem}>
          <p>Categories</p>
          <p style={{ fontWeight: "normal" }}>{`>`}</p>
        </div>
      </Link>
      {user && (
        <Link href="/author">
          <div className={styles.menuItem}>
            <p>Authors</p>
            <p style={{ fontWeight: "normal" }}>{`>`}</p>
          </div>
        </Link>
      )}
      <Link href="/trending">
        <div className={styles.menuItem}>
          <p>Trending</p>
          <p style={{ fontWeight: "normal" }}>{`>`}</p>
        </div>
      </Link>
    </div>
  );
}

export default MenuSelect;
