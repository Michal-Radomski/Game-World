// Component for creating a form in Create an Account Modal

import firebase from "firebase";
import {useForm} from "react-hook-form";
import React from "react";
import "../stylings/form.css";

// Log Out function
const SignOut = (userID) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log(`User ID: ${userID} was logged out`);
      alert("You will be automatically logget out \n Please login in a moment ...");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function FormSignUp(props) {
  const db = firebase.firestore();
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    console.log("SignUp data:", data);
    // Create account with email and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.Email, data.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log(38, user);
        const userID = user.uid;
        props.modalSignUpClose();
        console.log(`userID: ${userID}`);

        // Adding the user to the Firestore DB
        db.collection("users")
          .doc(userID)
          .set({
            Email: data.Email,
            Name: data.Name,
            gender: data.gender,
          })
          .then(() => {
            console.log("Document successfully added to the DB");

            //Auto Log Out function (above)
            SignOut(userID);
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
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
        style={{marginBottom: "20px"}}
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
      <select {...register("gender")} defaultValue="Other">
        <option value="other">Other</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <div className="form-btns">
        <button type="submit">Sign Up</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
