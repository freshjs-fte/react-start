import { ErrorMessage, Field } from "formik";
import React from "react";

export default function MyInput({ name, ...rest }) {
  return (
    <label>
      <Field  name={name} {...rest} />
      <ErrorMessage name={name} />
    </label>
  );
}
