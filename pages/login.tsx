import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import * as yup from "yup";
import styles from "../styles/LoginPage.module.scss";

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
          onSubmit={(data) => {
            console.log(data);
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
        <p>Don't have an account?</p> <p>Register</p>
      </span>
    </div>
  );
}

export default Login;
