// Component for checking if user is logged in/ logged out

import firebase from "firebase";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ModalSignUp from "./ModalSignUp";
import ModalLogIn from "./ModalLogIn";
import LogOutModal from "./ModalLogOut";
import UserProfileModal from "./ModalUserProfile";
import CreateArticleButton from "./CreateArticleButton";
import ModalAdmin from "./ModalAdmin";

const DivUser = styled.div`
  color: var(--secondary);
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

const SpanUser = styled.span`
  font-weight: 900;
  color: var(--secondary-light);
`;

export default function CurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser.email);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  if (currentUser) {
    return (
      <>
        <DivUser>
          You are logged in as: <SpanUser>{currentUser}</SpanUser>
        </DivUser>
        <ModalAdmin />
        <CreateArticleButton />
        <UserProfileModal />
        <LogOutModal />
      </>
    );
  } else
    return (
      <>
        <DivUser style={{color: "var(--primary-light)"}}>No user is currently logged in.</DivUser>
        <ModalLogIn />
        <ModalSignUp />
      </>
    );
}

// //* Getting data from firestore
// const userLoggedIn = firebase.auth().currentUser;
// // const email = userLoggedIn.email;
// const uid = userLoggedIn?.uid;
// // console.log("userLoggedIn.email:", email, "userLoggedIn.uid:", uid);
// // Setting up the state
// const [userInfo, setUserInfo] = useState({
//   Email: "",
//   gender: "",
//   Name: "",
// });
// // UseEffect + getting the user's data
// useEffect(() => {
//   firebase
//     .firestore()
//     .collection("users")
//     .doc(uid)
//     .get()
//     .then((doc) => {
//       console.log("User's data:", doc.data(), "User's uid:", uid);
//       setUserInfo(doc.data());
//     })
//     .catch((error) => {
//       console.log("Error getting document:", error);
//     });
// }, [uid]);
