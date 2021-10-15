import React from "react";
import { ErrorMessage, Field } from "formik";
import cn from "classnames";
import styles from "./MyInput.module.sass";

export default function MyInput({ name, errors, touched,values,  ...rest }) {
  const classNames = cn(styles.input, {
    [styles.valid]: touched[name] && !errors[name],
    [styles.invalid]: touched[name] && errors[name],
  });

  return (
    false,
    (
      <label>
        <Field name={name} {...rest} className={classNames} />
        <ErrorMessage name={name} className={styles.errorMsg} />
      </label>
    )
  );
}
