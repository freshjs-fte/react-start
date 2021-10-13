import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/forms/RegisterForm";

export default function SignUpPage() {
  const onSubmit = (values, formikBag) => {
    console.log(values);

    formikBag.resetForm();
  };

  return (
    <section>
      <Link to="/" style={{ backgroundColor: "#555", display: "inline-block" }}>
        <img src="/images/logo.png" alt="LOGO" style={{ display: "block" }} />
      </Link>
      <h1>CREATE AN ACCOUNT</h1>
      <h2>We always keep your name and email address private.</h2>
      <RegisterForm onSubmit={onSubmit} />
    </section>
  );
}
