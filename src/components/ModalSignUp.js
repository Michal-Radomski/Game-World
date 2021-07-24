// Component for Creating an Account

import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FormSignUp from "./FormSignUp";
import "../stylings/modals.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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

export default function ModalSignUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="SignUp" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{backgroundColor: "var(--primary)", color: "whiteSmoke"}}
        >
          Creating Account
        </DialogTitle>
        <DialogContent style={{backgroundColor: "whiteSmoke"}}>
          <FormSignUp modalSignUpClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
