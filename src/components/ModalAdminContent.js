import React from "react";
// import styled from "styled-components";
import firebase from "firebase";

// const SpyingP = styled.p`
//   color: var(--primary-light);
//   margin: 8px 16px;
// `;
// const SpyingSpan = styled.span`
//   color: var(--secondary);
//   float: right;
// `;

const ModalAdminContent = () => {
  const [userDB, setUserDB] = React.useState([]);

  // Getting collection of users from firestore DB
  React.useEffect(() => {
    setTimeout(function () {
      let usersList = [];
      firebase
        .firestore()
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log("Collection of Users:", doc.id, " => ", doc.data());
            usersList.push({
              id: doc.id,
              isAdmin: doc.data().isAdmin,
              name: doc.data().Name,
            });
          });
        });
      console.log("usersList:", usersList);
      setUserDB(usersList);
    }, 500);
  }, []);

  function revokeAdmin() {
    console.log(1);
  }
  function makeAdmin() {
    console.log(1);
  }

  return (
    <div>
      {userDB.map((user) => {
        return (
          <p>
            {user.name}
            {user.isAdmin ? (
              <span>
                (role: admin) <button onClick={() => revokeAdmin(user.id)}>Revoke Admin</button>
              </span>
            ) : (
              <span>
                (role: user) <button onClick={() => makeAdmin(user.id)}>Promote to Admin</button>
              </span>
            )}
          </p>
        );
      })}
    </div>
  );
};

export default ModalAdminContent;
