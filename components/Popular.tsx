import styles from "../styles/MainContainer.module.scss";

function Popular() {
  return (
    <div className={styles.newadded__container}>
      <h3>Popular Now</h3>
      <div className={styles.newadded}>
        <div className={styles.book__card}>
          <div className={styles.book__layout}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
              alt="chetan"
            />
          </div>

          <p>The Girl in Room 105</p>
        </div>

        <div className={styles.book__card}>
          <div className={styles.book__layout}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
              alt="chetan"
            />
          </div>

          <p>The Girl in Room 105</p>
        </div>

        <div className={styles.book__card}>
          <div className={styles.book__layout}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
              alt="chetan"
            />
          </div>

          <p>The Girl in Room 105</p>
        </div>

        <div className={styles.book__card}>
          <div className={styles.book__layout}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
              alt="chetan"
            />
          </div>

          <p>The Girl in Room 105</p>
        </div>

        <div className={styles.book__card}>
          <div className={styles.book__layout}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/419Lr6CbZ7L._SX323_BO1,204,203,200_.jpg"
              alt="chetan"
            />
          </div>

          <p>The Girl in Room 105</p>
        </div>
      </div>
    </div>
  );
}

export default Popular;
