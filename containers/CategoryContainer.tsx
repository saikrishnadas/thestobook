import styles from "../styles/Categories.module.scss";
import adventureIcon from "../public/Saly-16.png";
import romanceIcon from "../public/Sally-4.png";
import thrillerIcon from "../public/Saly-9.png";
import crimeIcon from "../public/Saly-17.png";
import scienceFictionIcon from "../public/Saly-19.png";
import fantacyIcon from "../public/Saly-22.png";

function CategoryContainer() {
  return (
    <div style={{ height: "100vh", width: "65%" }}>
      <div className={styles.categories__page}>
        <p>Categories</p>
        <div className={styles.categories__container}>
          <div className={styles.category__layout}>
            <div>
              <img
                style={{ marginTop: "45%" }}
                src={adventureIcon.src}
                alt=""
              />
            </div>
            <p>Action and Adventure</p>
          </div>

          <div className={styles.category__layout}>
            <div>
              <img src={fantacyIcon.src} alt="" />
            </div>
            <p>Fantasy</p>
          </div>

          <div className={styles.category__layout}>
            <div>
              <img style={{ marginTop: "55%" }} src={crimeIcon.src} alt="" />
            </div>
            <p>Crime</p>
          </div>

          <div className={styles.category__layout}>
            <div>
              <img src={romanceIcon.src} alt="" />
            </div>
            <p>Romance</p>
          </div>

          <div className={styles.category__layout}>
            <div>
              <img src={thrillerIcon.src} alt="" />
            </div>
            <p>Thriller</p>
          </div>

          <div className={styles.category__layout}>
            <div>
              <img src={scienceFictionIcon.src} alt="" />
            </div>
            <p>Science Fiction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
