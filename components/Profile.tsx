import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";
import styles from "../styles/NavContainer.module.scss";
import profilepic from "../public/profilepic.png";
import nouser from "../public/nouser.png";
import Link from "next/link";

function Profile() {
  const userInfo = useRecoilValue(userAtom);

  return (
    <div className={styles.profile}>
      {userInfo ? (
        <>
          {userInfo.isAdmin ? (
            <>
              <div>
                <img
                  src="https://miro.medium.com/fit/c/1360/1360/1*prGxEhjvfMxpeagLYWxA4w.jpeg"
                  alt="sai"
                />
              </div>
              <div className={styles.profile__name}>
                <h4>SAI KRISHNA DAS</h4>
                <p>Admin</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={profilepic.src} alt="" />
              </div>
              <div className={styles.profile__name}>
                <h4>{userInfo.name}</h4>
                <p>Premium Member</p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div>
            <img src={nouser.src} alt="" />
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
  );
}

export default Profile;
