import React from "react";
import styled from "styled-components";
import firebase from "firebase";

const SpyingP = styled.p`
  color: var(--primary-light);
  margin: 8px 16px;
`;
const SpyingSpan = styled.span`
  color: var(--secondary);
  float: right;
`;

const ModalAdminContent = () => {
  // Getting collection of users from firestore DB
  setTimeout(function () {
    let usersList = [];
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log("Collection of Users:", doc.id, " => ", doc.data());
          let userArray = [];
          userArray.push(doc.id);
          userArray.push(doc.data().isAdmin);
          userArray.push(doc.data().Name);
          usersList.push(userArray);
        });
      });

    console.log("usersList:", usersList, usersList.length);
  }, 500);

  return <div style={{backgroundColor: "inherit"}}></div>;
};

export default ModalAdminContent;
