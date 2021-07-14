// Component for creating a form in Create an Account Modal

import {useForm} from "react-hook-form";
import React from "react";
import "../stylings/form.css";

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log("LogIn data:", data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="firstLine">
        Fields marked<span> * </span>are required
      </p>
      <label htmlFor="email">
        Email:<span> * </span>
      </label>
      <input
        className="formInput"
        type="email"
        placeholder="name@example.com"
        {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
      />
      <label htmlFor="password">
        Password:<span> * </span>
      </label>
      <input
        className="formInput"
        type="password"
        placeholder="enter the password"
        {...register("password", {
          required: "Password is required!",
          min: 8,
          pattern: /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/i,
        })}
      />
      {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
