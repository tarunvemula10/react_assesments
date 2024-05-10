import { Button, TextField } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

const initialValues = {
  username: "",
  password: "",
};

const validateDetails = yup.object({
  username: yup
    .string("")
    .min(6, "atleast 6 characters")
    .max(12, "max 12 characters")
    .required("Required Name"),
  password: yup
    .string("")
    .min(8, 'Minimum 8 Characters')
    .matches(/[a-z]/, 'One lowercase is required')
    .matches(/[A-Z]/, 'One uppercase is required')
    .matches(/[0-9]/, 'One numerics is required')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'One Special character is required')
    .required("Password Required"),
});

export default function LoginForm() {

  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validateDetails,
    onSubmit: () => navigate('/home'),
  });
  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="username"
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
          autoComplete="username"
          sx={{width: 300}}
        />
        <br />
        <TextField
          id="pass"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          margin="normal"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.password && touched.password}
          helperText={errors.password}
          autoComplete="current-password"
          sx={{width: 300}}
        />
        <br />
        <Button variant="contained" type="submit" sx={{width: 300}} margin="normal">
          Login
        </Button>
      </Form>
    </Formik>
  );
}
