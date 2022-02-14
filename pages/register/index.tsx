import { useEffect } from "react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import * as yup from "yup";
import styles from "../../styles/Register.module.scss";
import Link from "next/link";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/userAtom";

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
      style={{ width: "30vw", marginBottom: "10px" }}
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
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
});

function Register() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const { redirect }: any = router.query;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.register__page}>
      <div className={styles.register__container}>
        <h2>Welcome Back</h2>
        <p className={styles.register__text}>
          Enter your crendentials to access a book
        </p>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            img: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (formData) => {
            const email = formData.email;
            const password = formData.password;
            const name = formData.name;
            const confirmpassword = formData.confirmpassword;
            const img = formData.img;
            if (password !== confirmpassword) {
              alert("Passwords doesn't match");
              return;
            }

            try {
              const { data } = await axios.post("/api/user/register", {
                name,
                email,
                password,
                img,
              });
              setUserInfo(data);
              Cookies.set("userInfo", JSON.stringify(data));
              router.push(redirect || "/");
            } catch (err) {
              alert(
                err.response.data ? err.response.data.message : err.message
              );
            }
            // console.log(formData);
          }}
        >
          {({ values }) => (
            <Form className={styles.register__form}>
              <InputField
                placeholder="Enter the name"
                value={values.name}
                name="name"
                type="text"
              />
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
              <InputField
                placeholder="Confirm password"
                value={values.confirmpassword}
                name="confirmpassword"
                type="password"
              />
              <InputField
                placeholder="Image Url"
                value={values.img}
                name="img"
                type="text"
              />
              <Button
                variant="contained"
                type="submit"
                className={styles.register__button}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <span className={styles.register__message}>
        <p>Do you have an account?</p>{" "}
        <Link href={`/login?redirect=${redirect || "/"}`}>
          <p>Login</p>
        </Link>
      </span>
    </div>
  );
}

export default Register;
