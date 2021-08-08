// Component for creating a form in Create an Account Modal

import {useForm} from "react-hook-form";
import React from "react";
import "../stylings/form.css";
import firebase from "firebase";

export default function FormLogIn(props) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    console.log(15, "LogIn data:", data);
    // Logging In to the Firestore DB
    firebase
      .auth()
      .signInWithEmailAndPassword(data.Email, data.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        const userID = user.uid;
        // console.log(user);
        props.modalLogInClose();
        console.log(`User ID: ${userID} was logged in`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="firstLine">
        Fields marked<span className="modalForm"> * </span>are required
      </p>
      <label htmlFor="email">
        Email:<span className="modalForm"> * </span>
      </label>
      <input
        className="formInput"
        type="email"
        placeholder="name@example.com"
        {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
      />
      <label htmlFor="password">
        Password:<span className="modalForm"> * </span>
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
      <div className="form-btns">
        <button type="submit">Log In</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
