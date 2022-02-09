import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import * as yup from "yup";
import styles from "../styles/LoginPage.module.scss";
import Link from "next/link";
import axios from "axios";

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
  email: yup.string().email(),
  password: yup.string().required(),
});

function Login() {
  return (
    <div className={styles.login__page}>
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
              alert("Succesfully Logged In");
            } catch (err) {
              alert(
                err.response.data ? err.response.data.message : err.message
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
        <Link href="/register">
          <p>Register</p>
        </Link>
      </span>
    </div>
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
