import React from "react";
import styled from "styled-components";
import firebase from "firebase";

const ListUsersH2 = styled.h2`
  background-color: var(--primary-light);
  color: white;
  margin: 8px auto 16px auto;
`;

const ListUsersP = styled.p`
  background-color: inherit;
  color: black;
  margin: 8px 16px;
`;

const ListUsersSpan = styled.span`
  background-color: inherit;
  color: inherit;
  float: right;
`;

const ListUsersButton = styled.button`
  background-color: inherit;
  color: red;
`;

const ModalAdminContent = () => {
  const [userDB, setUserDB] = React.useState([]);

  React.useEffect(() => {
    let usersList = [];
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          usersList.push({
            id: doc.id,
            Email: doc.data().Email,
            Name: doc.data().Name,
            gender: doc.data().gender,
            isAdmin: doc.data().isAdmin,
          });
        });
        setUserDB(usersList);
      });
    console.log("usersList:", usersList);
  }, []);

  function revokeAdmin(id) {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        console.log("User's data:", doc.data(), "User's uid:", id);
        console.log(doc.data());
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function makeAdmin(id) {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log("User's data:", doc.data(), "User's uid:", uid);
        console.log(doc.data());
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  console.log("userDB:", userDB);

  return (
    <div>
      <ListUsersH2>List of Users:</ListUsersH2>
      {userDB.map((user) => {
        return (
          <ListUsersP key={user.id}>
            {user.Name}&#8239;&#8239;&#8239;&#8239;
            {user.Email}&#8239;&#8239;&#8239;&#8239;
            {user.isAdmin ? (
              <ListUsersSpan>
                /role: admin/ &#8239;&#8239;&#8239;{" "}
                <ListUsersButton onClick={() => revokeAdmin(user.id)}>Revoke Admin</ListUsersButton>
              </ListUsersSpan>
            ) : (
              <ListUsersSpan>
                /role: user/ &#8239;&#8239;&#8239;{" "}
                <ListUsersButton onClick={() => makeAdmin(user.id)}>Promote to Admin</ListUsersButton>
              </ListUsersSpan>
            )}
          </ListUsersP>
        );
      })}
    </div>
  );
};

export default ModalAdminContent;
