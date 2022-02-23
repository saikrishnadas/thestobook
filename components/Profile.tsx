import { useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import styles from "../styles/NavContainer.module.scss";
import nouser from "../public/nouser.png";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoutModal from "./LogoutModal";
import AdminModal from "./AdminModal";
import Image from "next/image";

//@ts-ignore
import Cookies from "js-cookie";

function Profile() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const [logoutModal, setLogoutModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);

  const handleLogout = () => {
    setUserInfo(null);
    Cookies.set("userInfo", null);
    router.push("/");
    setLogoutModal(false);
  };

  const handleLogoutClick = () => {
    setLogoutModal(true);
  };

  const handleClose = () => {
    setLogoutModal(false);
  };

  const user = Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null;

  const handleAdminClose = () => {
    setAdminModal(false);
  };

  return (
    <>
      <AdminModal handleAdminClose={handleAdminClose} adminModal={adminModal} />
      <LogoutModal
        handleClose={handleClose}
        logoutModal={logoutModal}
        handleLogout={handleLogout}
      />
      <div className={styles.profile}>
        {user ? (
          <>
            <div className={styles.profile__image}>
              <Image
                src={nouser.src}
                alt="profile image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profile__name}>
              <h4>{user.name}</h4>
              {user.isAdmin ? (
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => setAdminModal(true)}
                >
                  Admin
                </p>
              ) : (
                <p>Premium Member</p>
              )}
              <p
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "white",
                }}
                onClick={handleLogoutClick}
              >
                Logout
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.profile__image}>
              <Image
                src={nouser.src}
                alt="profile image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profile__name}>
              <span style={{ display: "flex" }}>
                <Link href="/login">
                  <h4
                    style={{
                      marginRight: "5px",
                      textDecoration: "underline",
                      color: "#3e5bff",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </h4>
                </Link>
                <h4>to Read</h4>
              </span>
              <span style={{ display: "flex" }}>
                <p>Don't have an account?</p>
                <Link href="/register">
                  <p
                    style={{
                      marginLeft: "5px",
                      textDecoration: "underline",
                      color: "#3e5bff",
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </p>
                </Link>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
