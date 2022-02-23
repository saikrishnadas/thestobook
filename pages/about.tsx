import styles from "../styles/About.module.scss";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import HeadTag from "../components/HeadTag";

function about() {
  return (
    <>
      <HeadTag title="About" />
      <div className={styles.about_page}>
        <div className={styles.navbar}>
          <p>Home</p>
          <p>Categories</p>
          <p>Saved</p>
          <p>Trending</p>
          <p>Authors</p>
        </div>
        <div className={styles.about}>
          <p>About</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>

        <div className={styles.developer}>
          <p>Designed And Developed</p>
          <div className={styles.developer__details}>
            <img
              src="https://miro.medium.com/fit/c/1360/1360/1*prGxEhjvfMxpeagLYWxA4w.jpeg"
              alt=""
            />
            <div className={styles.developer__tags}>
              <p style={{ fontSize: "20px", marginTop: "0" }}>
                Sai Krishna Das
              </p>
              <div className={styles.icons}>
                <Link href="https://github.com/saikrishnadas">
                  <img
                    src="./Github.jpg"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/sai-krishna-das/">
                  <img
                    src="./LinkedIN.jpg"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
                <Tooltip
                  title="saikrishnadas666@gmail.com"
                  placement="bottom-end"
                >
                  <img
                    src="./Mail.jpg"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Tooltip>
                <Link href="https://www.saikrishnadas.com/">
                  <img
                    src="./IE.jpg"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
                <Link href="https://www.saikrishnadas.com/">
                  <img
                    src="./Figma.jpg"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.about__footer}>
          <p>Desgined and Developed by Sai Krishna Das</p>
          <p>Copyright © thestobook</p>
        </span>
      </div>
    </>
  );
}

export default about;
