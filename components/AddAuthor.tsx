import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import * as yup from "yup";
import styles from "../styles/AdminModal.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
      style={{ width: "80vw", marginBottom: "10px" }}
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
  slug: yup.string().required(),
  authorId: yup.string().required(),
  img: yup.string().required(),
});

function AddAuthor({ handleAdminClose }: any) {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          slug: "",
          img: "",
          authorId: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const resp = await axios.post("/api/author", formData);
          console.log(resp);
          handleAdminClose();
          //   console.log(formData);
        }}
      >
        {({ values }) => (
          <Form className={styles.add__form}>
            <InputField
              placeholder="Enter the name"
              value={values.name}
              name="name"
              type="text"
            />
            <InputField
              placeholder="Enter the slug"
              value={values.slug}
              name="slug"
              type="text"
            />
            <InputField
              placeholder="Enter the img"
              value={values.img}
              name="img"
              type="text"
            />
            <InputField
              placeholder="Enter the authorId"
              value={values.authorId}
              name="authorId"
              type="text"
            />
            <Button
              variant="contained"
              type="submit"
              className={styles.add__button}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddAuthor;
