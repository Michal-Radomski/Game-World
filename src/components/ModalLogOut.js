// Component for Logging Out

import React from "react";
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

export default function LogOutModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="LogOut" onClick={handleClickOpen}>
        Log Out
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{backgroundColor: "var(--primary)", color: "whiteSmoke"}}
        >
          Logging Out
        </DialogTitle>
        <DialogContent style={{backgroundColor: "whiteSmoke", padding: "16px"}}>
          <Typography style={{color: "black", margin: "16px"}}>Do you really want to Log Out?</Typography>
        </DialogContent>
        <DialogActions style={{backgroundColor: "whiteSmoke", display: "flex", justifyContent: "space-between"}}>
          <Button autoFocus onClick={handleClose} className="LogOutNo">
            No
          </Button>
          <Button autoFocus onClick={handleClose} className="LogOutYes">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
