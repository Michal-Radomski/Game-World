import StickyBox from "react-sticky-box";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WallpaperIcon from "@material-ui/icons/Wallpaper";

export function Sidebar() {
    return (
        <>
            <StickyBox>
                <h2 className="sidebarHeader">Menu</h2>
                <div className="content-sidebar" style={{ color: "white" }}>
                    <ul>
                        <li>
                            <ImportContactsIcon />
                            <span> Articles</span>
                        </li>
                        <li>
                            <MenuBookIcon />
                            <span> Create your article</span>
                        </li>
                        <li>
                            <SportsEsportsIcon />
                            <span> Game catalog</span>
                        </li>
                        <li>
                            <WallpaperIcon />
                            <span> Gallery</span>
                        </li>
                    </ul>
                </div>
            </StickyBox>
        </>
    );
}
