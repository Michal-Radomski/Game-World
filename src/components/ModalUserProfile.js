// Component for User Info

import React, {useState, useEffect} from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "../stylings/modals.css";
import firebase from "firebase";
import Spying from "./Spying";
import SpyingMap from "./SpyingMap";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{
            backgroundColor: "var(--secondary)",
            color: "whitesmoke",
            float: "right",
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function UserProfileModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //* Getting data from firestore
  const userLoggedIn = firebase.auth().currentUser;
  // const email = userLoggedIn.email;
  const uid = userLoggedIn?.uid;
  // console.log("userLoggedIn.email:", email, "userLoggedIn.uid:", uid);
  // Setting up the state
  const [userInfo, setUserInfo] = useState({
    Email: "",
    gender: "",
    Name: "",
  });
  // UseEffect + getting the user's data
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        console.log("User's data:", doc.data(), "User's uid:", uid);
        setUserInfo(doc.data());
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [uid]);

  return (
    <div>
      <Button className="UserInfo" onClick={handleClickOpen}>
        User's Profile
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{backgroundColor: "var(--primary-light)", color: "whiteSmoke"}}
        >
          User's Profile
        </DialogTitle>
        <DialogContent style={{backgroundColor: "whiteSmoke", padding: "16px"}}>
          <Typography style={{color: "black", margin: "16px"}}>
            You are logged as: &nbsp;<span className="UserProfileSpan">{userInfo.Name}</span>
          </Typography>
          <Typography style={{color: "black", margin: "16px"}}>
            To contact you, we'll send an e-mail to: &nbsp;<span className="UserProfileSpan">{userInfo.Email}</span>
          </Typography>
          <Typography style={{color: "black", margin: "16px"}}>
            You have set your gender as: &nbsp;<span className="UserProfileSpan">{userInfo.gender}</span>
          </Typography>
          <div style={{borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20}}></div>
          <Typography style={{color: "gray", margin: "24px 16px 5px 16px"}}>For Geeks only:</Typography>
          <Typography style={{color: "gray", margin: "5px 16px 16px 16px"}}>
            Your account's ID is: &nbsp;
            <span className="UserProfileSpan" style={{color: "var(--primary-light)"}}>
              {uid}
            </span>
          </Typography>
          <div style={{borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20}}></div>
          <Typography style={{color: "gray", margin: "24px 16px 5px 16px"}}>Some spied information for us...</Typography>
          <Spying />
          <div style={{borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20}}></div>
          <SpyingMap />
          <div style={{borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20}}></div>
        </DialogContent>
        <DialogActions style={{backgroundColor: "whiteSmoke", float: "right"}}>
          <Button autoFocus onClick={handleClose} className="UserInfoOk">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
