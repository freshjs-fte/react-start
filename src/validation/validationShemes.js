import * as yup from "yup";

export const passwordRegex =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

export const firstnameRegex = /^[\w]{3,30}$/;

export const SIGNUP_SCHEME = yup
  .object()
  .required()
  .shape({
    firstname: yup
      .string()
      .matches(firstnameRegex, "Not valid")
      .required("Firstname is required"),

    email: yup.string().email().required(),

    password: yup.string().matches(passwordRegex).required(),

    confPassword: yup.string().required(),
  });
