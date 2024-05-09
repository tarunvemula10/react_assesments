import { Button, TextField } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import * as yup from 'yup';

const initialValues = {
  username: "",
  password: "",
};

const validateDetails = yup.object({
  username: yup
    .string("")
    .min(6, "atleast 6 characters")
    .max(12, "atleast 12 characters")
    .required("Required Name"),
  password: yup
    .string("")
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{14,}$",
      "Must Contain 14 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password Required"),
});

export default function LoginForm() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validateDetails,
    onSubmit: (values) => console.log(values),
  });
  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          type="text"
          label="User Name"
          variant="outlined"
          name="username"
          margin="normal"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.username && touched.username}
          helperText={errors.username}
        />
        <br />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          margin="normal"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.password && touched.password}
          helperText={errors.password && touched.password && `${errors.password}`}
        />
        <br />
        <Button variant="contained" type="submit" fullWidth margin="normal">
          Login
        </Button>
      </Form>
    </Formik>
  );
}
