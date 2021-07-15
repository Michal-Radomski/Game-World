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
import "../stylings/TopBarMenu.css";
import { Link } from "react-router-dom";

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

            <MenuIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ top: 50 }}
            >
                <MenuItem onClick={handleClose} className="MenuItem">
                    <Link to="/articles" style={{ color: "black" }}>
                        <ImportContactsIcon />
                        <span>&nbsp;&nbsp;&nbsp;Articles</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="MenuItem">
                    <Link to="/create-article" style={{ color: "black" }}>
                        <MenuBookIcon />
                        <span>&nbsp;&nbsp;&nbsp;Create your article</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="MenuItem">
                    <Link to="/games" style={{ color: "black" }}>
                        <SportsEsportsIcon />
                        <span>&nbsp;&nbsp;&nbsp;Game catalog</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="MenuItem">
                    <Link to="/gallery" style={{ color: "black" }}>
                        <WallpaperIcon />
                        <span>&nbsp;&nbsp;&nbsp;Gallery</span>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
