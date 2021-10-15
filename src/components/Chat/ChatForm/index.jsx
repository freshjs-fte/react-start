import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function ChatForm(props) {
  return (
    <Formik
      /* обязательные параметры */
      initialValues={{ text: "" }}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field name="text" />
            <button type="submit" >Отправить</button>
          </Form>
        );
      }}
    </Formik>
  );
}
