// Manages if user is LoggedIn/ LoggedOut

import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import FormSignUp from "./FormSignUp";
import FormLogIn from "./FormLogIn";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
function UserManager() {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <FormSignUp path="signUp" />
      <FormLogIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default UserManager;
