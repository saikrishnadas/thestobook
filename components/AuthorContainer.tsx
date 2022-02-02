import { useRouter } from "next/router";
import styles from "../styles/Author.module.scss";
import { books } from "../utils/data";

function AuthorContainer() {
  const router = useRouter();
  const authorSlug = router.query.slug;
  console.log(authorSlug);
  return (
    <div style={{ height: "100vh", width: "65%" }}>
      <div className={styles.author__tag}>
        <img
          src="https://img.etimg.com/thumb/msid-66099431,width-650,imgsize-149367,,resizemode-4,quality-100/chetan-bhagats-advice-for-students-its-all-about-knowing-how-to-market-yourself.jpg"
          alt=""
        />
        <p>Chetan Bagat</p>
      </div>
      <div className={styles.author__book__container}>
        {books.map((book) => {
          return (
            <div className={styles.book__card} key={book.id}>
              <div
                className={styles.book__layout}
                // style={{ backgroundColor: myColor }}
              >
                <img src={book.img} alt={book.slug} />
              </div>

              <p>{book.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AuthorContainer;
