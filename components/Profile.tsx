import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import styles from "../styles/NavContainer.module.scss";
import profilepic from "../public/profilepic.png";
import nouser from "../public/nouser.png";
import Link from "next/link";
import { useRouter } from "next/router";

//@ts-ignore
import Cookies from "js-cookie";
import { useEffect } from "react";

function Profile() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);

  const handleLogout = () => {
    setUserInfo(null);
    Cookies.set("userInfo", null);
    router.push("/");
  };

  useEffect(() => {
    const data = JSON.parse(Cookies.get("userInfo"));
    console.log("data from Cookie", data);
    console.log("data from atom", userInfo);
  }, []);

  return (
    <div className={styles.profile}>
      {userInfo ? (
        <>
          {userInfo.isAdmin ? (
            <>
              <div>
                <img src={userInfo.img} alt="" />
              </div>
              <div className={styles.profile__name}>
                <h4>{userInfo.name}</h4>
                <p>Admin</p>
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "white",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={userInfo.img} alt="" />
              </div>
              <div className={styles.profile__name}>
                <h4>{userInfo.name}</h4>
                <p>Premium Member</p>
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "white",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </p>
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
