import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
// classnames
import { SIGNUP_SCHEME } from "../../../validation/validationShemes";

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
      {({ errors, touched }) => {
        return (
          <Form>
            <label>
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname" />
            </label>
            <label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" />
            </label>
            <label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </label>
            <label>
              <Field type="password" name="confPassword" />
              <ErrorMessage name="confPassword" />
            </label>

            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
}
