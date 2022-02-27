import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, FieldAttributes, useField } from "formik";
import * as yup from "yup";
import styles from "../styles/LoginPage.module.scss";
import Link from "next/link";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import HeadTag from "../components/HeadTag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SampleUser from "../components/SampleUser";

// @ts-ignore
import Cookies from "js-cookie";

type InputFieldProps = {
  placeholder: string;
  type: string;
} & FieldAttributes<{}>;

const InputField = ({ placeholder, type, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      className={styles.textField}
      id="outlined-error-helper-text"
      placeholder={placeholder}
      type={type}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().required(),
});

function Login() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const { redirect }: any = router.query;
  const [sampleUserModal, setSampleUserModal] = useState(false);

  const handleSampleUserOpen = () => {
    setSampleUserModal(true);
  };
  const handleSampleUserClose = () => {
    setSampleUserModal(false);
  };

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <SampleUser
        sampleUserModal={sampleUserModal}
        handleSampleUserClose={handleSampleUserClose}
      />
      <HeadTag title="Login" />
      <div className={styles.login__page}>
        <p className={styles.sample__user} onClick={handleSampleUserOpen}>
          Click here to get sample test user
        </p>
        <div className={styles.login__container}>
          <h2>Welcome Back</h2>
          <p className={styles.login__text}>
            Enter your crendentials to access a book
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (formData) => {
              const email = formData.email;
              const password = formData.password;
              try {
                const { data } = await axios.post("/api/user/login", {
                  email,
                  password,
                });
                setUserInfo(data);
                Cookies.set("userInfo", JSON.stringify(data));
                router.push(redirect || "/");
              } catch (err: any) {
                // alert(
                //   err.response.data ? err.response.data.message : err.message
                // );
                toast.error(
                  err.response.data ? err.response.data.message : err.message,
                  {
                    position: "top-center",
                  }
                );
              }
            }}
          >
            {({ values }) => (
              <Form className={styles.login__form}>
                <InputField
                  placeholder="Enter the email"
                  value={values.email}
                  name="email"
                  type="email"
                />
                <InputField
                  placeholder="Enter the password"
                  value={values.password}
                  name="password"
                  type="password"
                />
                <Button
                  variant="contained"
                  type="submit"
                  className={styles.login__button}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <span className={styles.login__message}>
          <p>Don't have an account?</p>{" "}
          <Link href={`/register?redirect=${redirect || "/"}`}>
            <p>Register</p>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Login;

//redirect to login from reading
//create a user model
// seed users -- import bcrypt from "bcryptjs" .. bcrypt.hashSync('123456')
// User find api
//findOne using email, if user exists bcrypt.compareSync req password and user.password
// create a token varibale = signToken and pass user to it
// auth.js -- import jwt and create signToken function
// return jwt.sign and pass all _id, email,name, isAdmin and secret key, { expiresIn:"30d"}

//res.send token and user infos - password or else status 401 with inbvalid user or pass

//onSubmit for form e.prev, make post req to user api login , data - email and pass inside try and catch alerts -- err.response.data ? err.response.data.message: err.message
//email and pass state

//set state user atom -- data
//if userInfo router.push("/") inside useEffect -- get the state from user atom
// default state of atom is - Cookies.get("userInfo") ? Json parse the cookie : null -- npm js-cookie
// set the cookie userInfo in login.tsx
// redirect the user
//check if the not userInfo in reading comp redirect to /login?redirect=/reading

// If user is logged in show the name of user
//logout button
//logout click -- change user atom state and remove userinfo and router.push("/")
