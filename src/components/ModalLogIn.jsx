import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Modal} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonLogIn: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
    border: "1px solid darkblue",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1e88e5",
    },
  },
}));

export default function ModalLogIn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.buttonLogIn} style={{borderRadius: 5}} onClick={handleOpen}>
        Log In
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
