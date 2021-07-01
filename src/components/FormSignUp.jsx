// Component for creating a form in Create an Account Modal

import {useForm} from "react-hook-form";
import React from "react";
import "./form.css";

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();
  const onSubmit = (data) => console.log("SignUp data:", data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="firstLine">
        Fields marked<span> * </span>are required
      </p>
      <label htmlFor="name">
        Name:<span> * </span>
      </label>
      <input
        className="formInput"
        type="text"
        placeholder="enter name..."
        {...register("Name", {required: true, maxLength: 80})}
      />
      <label htmlFor="email">
        Email:<span> * </span>
      </label>
      <input
        className="formInput"
        type="email"
        placeholder="name@example.com"
        {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
      />
      {/* <input className="formInput" type="password" placeholder="Password" {...register("Password", {required: "Password is required!", min: 8, pattern: /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/i})}/> */}
      <label htmlFor="password">
        Password:<span> * </span>
      </label>
      <input
        className="formInput"
        type="password"
        placeholder="min 8 characters, at least 1 letter, at least 1 digit "
        {...register("password", {
          required: "Password is required!",
          min: 8,
          pattern: /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/i,
        })}
      />
      {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
      <label htmlFor="confirmPassword">
        Confirm password:<span> * </span>
      </label>
      <input
        className="formInput"
        type="password"
        placeholder="confirm password"
        {...register("passwordConfirmation", {
          required: "Please confirm password!",
          pattern: /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/i,
          min: 8,
          validate: {
            matchesPreviousPassword: (value) => {
              const {password} = getValues();
              return password === value || "Passwords should match!";
            },
          },
        })}
      />
      {errors.passwordConfirmation && <p style={{color: "red"}}>{errors.passwordConfirmation.message}</p>}
      <label htmlFor="gender" style={{display: "inline", float: "left"}}>
        Gender:&#160;&#160;
      </label>
      <select {...register("gender")}>
        <option value="other" selected>
          other
        </option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
