import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTopGames } from "../components/Firebase";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import "../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "30px",
        // width: "65vw",
        textAlign: "-webkit-center",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useModalStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        backgroundColor: "black",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Gallery() {
    const classes = useStyles();
    const topGames = useTopGames();
    function changeOriginalImageSize(image, size) {
        const splitImage = image.split("thumb");
        // console.log(splitImage);
        return `https://${splitImage[0]}${size}${splitImage[1]}`;
    }
    const modalClasses = useModalStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(null);

    const handleOpen = (img) => () => {
        setOpen(img);
    };

    const handleClose = () => {
        setOpen(null);
    };
    return (
        <>
        <h2 style={{marginLeft: "13.5vw"}}>Gallery</h2>
            <div className={classes.root}>
                
                <Grid container className="topGamesContainer" spacing={3}>
                    {topGames.map((game) => {
                        return (
                            <div key={game.id}>
                                <h3 className="galleryHeader">{game.name}</h3>
                                <Grid item xs>
                                    <Button onClick={handleOpen(game.screenshots[0])}>
                                        <Paper className={(classes.paper, "paperInnerStyle")}>
                                            <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[0]}`, "cover_big")} alt=""></img>
                                        </Paper>
                                    </Button>
                                </Grid>
                                {game.screenshots[1] && (
                                    <Grid item xs>
                                        <Button onClick={handleOpen(game.screenshots[1])}>
                                            <Paper className={(classes.paper, "paperInnerStyle")}>
                                                <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[1]}`, "cover_big")} alt=""></img>
                                                {/* {console.log("nomodal", changeOriginalImageSize(`${game.screenshots[1]}`, "cover_big"))} */}
                                            </Paper>
                                        </Button>
                                    </Grid>
                                )}
                                {game.screenshots[2] && (
                                    <Grid item xs>
                                        <Button onClick={handleOpen(game.screenshots[2])}>
                                            <Paper className={(classes.paper, "paperInnerStyle")}>
                                                <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[2]}`, "cover_big")} alt=""></img>
                                            </Paper>
                                        </Button>
                                    </Grid>
                                )}
                            </div>
                        );
                    })}
                </Grid>
            </div>
            <Modal open={!!open} onClose={handleClose}>
                <div style={modalStyle} className={modalClasses.paper}>
                    <img style={{maxWidth: "95vw"}} src={changeOriginalImageSize(open || "", "screenshot_big")} alt="" />
                </div>
            </Modal>
        </>
    );
}
