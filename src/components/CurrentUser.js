// Component for checking if user is logged in/ logged out

import firebase from "firebase";
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const DivUser = styled.div`
  background-color: initial;
  color: var(--secondary-light);
  margin-left: auto;
  margin-right: auto;
`;

// const SpanUser = styled.span`
//   font-weight: bold;
//   font-style: italic;
//   color: red;
// `;

export default function CurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  return (
    <DivUser>
      {currentUser ? `You are logged in as:  <span> ${currentUser} </span>   ` : "No user is currently logged in."}
      {/* Currnt user: <SpanUser> {currentUser}</SpanUser> */}
    </DivUser>
  );
}
