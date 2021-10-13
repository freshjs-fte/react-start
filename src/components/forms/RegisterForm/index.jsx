import React from "react";
import {Form, Formik, ErrorMessage } from "formik";
import { SIGNUP_SCHEME } from "../../../validation/validationShemes";
import MyInput from "../MyInput";

const initialValues = {
  firstname: "",
  email: "",
  password: "",
  confPassword: "",
};

export default function RegisterForm(props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGNUP_SCHEME}
    >
      {(formikProps) => {
        return (
          <Form>
            <MyInput type="text" name="firstname" {...formikProps} />

            <MyInput type="text" name="email" {...formikProps} />

            <MyInput type="password" name="password" {...formikProps} />

            <MyInput type="password" name="confPassword" {...formikProps} />

            <ErrorMessage name="confPassword" {...formikProps} />

            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
}
