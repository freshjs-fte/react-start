import { ErrorMessage, Field } from "formik";
// classnames
import React from "react";

export default function MyInput({ name, errors, touched, ...rest }) {
    
  return (
    <label>
      <Field  name={name} {...rest} />
      <ErrorMessage name={name} />
    </label>
  );
}
