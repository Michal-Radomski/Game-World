// Component for checking if user is logged in/ logged out

import firebase from "firebase";
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const DivUser = styled.div`
  color: var(--secondary);
  margin-left: auto;
  margin-right: auto;
`;

const SpanUser = styled.span`
  font-weight: 900;
  color: var(--secondary-light);
`;

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

  // Previous verion
  // return <DivUser>{currentUser ? `You are logged in as: ${currentUser}` : "No user is currently logged in"}</DivUser>;

  if (currentUser) {
    return (
      <DivUser>
        You are logged in as: <SpanUser>{currentUser}</SpanUser>
      </DivUser>
    );
  } else return <DivUser style={{color: "var(--primary-light)"}}>No user is currently logged in.</DivUser>;
}
