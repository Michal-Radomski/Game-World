// Component for Header

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {fade, makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TopBarMenu from "./TopBarMenu";
import Logo from "../images/G-W-logo.png";
import ModalSignUp from "./ModalSignUp";
import ModalLogIn from "./ModalLogIn";
import {Link} from "react-router-dom";
import {useState} from "react";
import LogOutModal from "./ModalLogOut";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  console.log("Value", value);
  const makeSearchSlug = (value) => {
    if (!value || value.length === 0) return "#";
    return `/search/?query=${encodeURIComponent(value)}`;
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    } else {
      const slug = makeSearchSlug(value);
      window.location = slug;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "var(--primary)"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <TopBarMenu />
          </IconButton>
          <Link to="/">
            <img src={Logo} height="35px" alt="Game World Logo" />
          </Link>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{color: "#FDC84B"}}>
              &#8239;GAMEWORLD
            </Link>
          </Typography>
          <LogOutModal />
          <ModalSignUp />
          <ModalLogIn />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              inputProps={{"aria-label": "search"}}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
