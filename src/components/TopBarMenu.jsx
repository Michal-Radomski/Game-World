// Component for Left-Side Menu

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import "./TopBarMenu.css";

export default function TopbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}

      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} className="MenuItem">
          {" "}
          <ImportContactsIcon />
          <span>&nbsp;&nbsp;&nbsp;Articles</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="MenuItem">
          {" "}
          <MenuBookIcon />
          <span>&nbsp;&nbsp;&nbsp;Create your article</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="MenuItem">
          {" "}
          <SportsEsportsIcon />
          <span>&nbsp;&nbsp;&nbsp;Game catalog</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="MenuItem">
          {" "}
          <WallpaperIcon />
          <span>&nbsp;&nbsp;&nbsp;Gallery</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
