// Component for checking if user is logged in/ logged out

import firebase from "firebase";
import React, {useState, useEffect} from "react";

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

  return <div>{currentUser ? `The current logged in user is: ${currentUser}.` : "No user is currently logged in."}</div>;
}
