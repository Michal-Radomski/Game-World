import StickyBox from "react-sticky-box";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <>
            <StickyBox>
                <h2 className="sidebarHeader">Menu</h2>
                <div className="content-sidebar" style={{ color: "white" }}>
                    <ul>
                        <li>
                            <Link to="/create-article">
                                <ImportContactsIcon />
                                <span> Articles</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/create-article">
                                <MenuBookIcon />
                                <span>Create your article</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/games">
                                <SportsEsportsIcon />
                                <span>Game catalog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery">
                                <WallpaperIcon />
                                <span>Gallery</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </StickyBox>
        </>
    );
}
