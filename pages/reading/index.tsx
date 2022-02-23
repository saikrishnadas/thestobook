import { useEffect } from "react";
import styles from "../../styles/Reading.module.scss";
import rightIcon from "../../public/Group 5.png";
import leftIcon from "../../public/Group 6.png";
// import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/userAtom";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import nouser from "../../public/nouser.png";
import HeadTag from "../../components/HeadTag";

//@ts-ignore
import Cookies from "js-cookie";

function index() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const handleLogout = () => {
    setUserInfo(null);
    Cookies.set("userInfo", null);
    router.push("/");
  };

  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/reading");
    }
  }, []);

  return (
    <>
      <HeadTag title="The Stobook" />
      {!userInfo ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "#29315a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div className={styles.reading__container}>
          <div className={styles.nav__container}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/categories">
              <p>Categories</p>
            </Link>
            <Link href="/saved">
              <p>Saved</p>
            </Link>
            <Link href="/trending">
              <p>Trending</p>
            </Link>
            <p onClick={handleLogout}>Logout</p>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.profile__division}>
              <img src={nouser.src} alt="profile image" />
              <h3>{userInfo?.name}</h3>
              <p>Premium Member</p>
            </div>

            <div className={styles.paper__container}>
              <div className={styles.heading__container}>
                <p>Chapter 1</p>
                <p>1/257</p>
              </div>
              <div className={styles.content__container}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default index;
