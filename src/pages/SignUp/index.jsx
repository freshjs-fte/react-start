import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";

export default function SignUpPage() {
  const onSubmit = (values, formikBag) => {
    console.log(values);

    formikBag.resetForm();
  };

  return (
    <section>
      <h1>CREATE AN ACCOUNT</h1>
      <h2>We always keep your name and email address private.</h2>
      <RegisterForm onSubmit={onSubmit} />
    </section>
  );
}
