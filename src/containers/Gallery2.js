import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTopGames } from "../components/Firebase";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import "../App.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "30px",
        width: "65vw",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
    const top = 10;
    const left = 10;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useModalStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        // width: 400,
        backgroundColor: "green",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Gallery2() {
    const classes = useStyles();
    const topGames = useTopGames();
    function changeOriginalImageSize(image, size) {
        const splitImage = image.split("thumb");
        return `https://${splitImage[0]}${size}${splitImage[1]}`;
    }
    const modalClasses = useModalStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // console.log("IMAGE---", changeOriginalImageSize("images.igdb.com/igdb/image/upload/t_thumb/npe0c8mphnlmp9elxqko.jpg", "cover_big"));
    return (
        <div className={classes.root}>
            <h2>Gallery</h2>

            <Grid container className="topGamesContainer" spacing={3}>
                {topGames.slice(10, 19).map((game) => {
                    // console.log("GGG", game);
                    return (
                        <>
                            <h3 className="galleryHeader">{game.name}</h3>
                            <Grid item xs>
                                <Button onClick={handleOpen}>
                                    <Paper className={(classes.paper, "paperInnerStyle")} key={game.id}>
                                        <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[0]}`, "cover_big")} alt=""></img>
                                    </Paper>
                                </Button>
                            </Grid>
                            {game.screenshots[1] && (
                                <Grid item xs>
                                    <Button>
                                        <Paper className={(classes.paper, "paperInnerStyle")} key={game.id}>
                                            <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[1]}`, "cover_big")} alt=""></img>
                                            {console.log("game 1", game)}
                                            <Modal open={open} onClose={handleClose}>
                                                <div style={modalStyle} className={modalClasses.paper}>
                                                    <img src={changeOriginalImageSize(`${game.screenshots[1]}`, "screenshot_big")} alt=""></img>
                                                    {console.log("game 2", game)}
                                                </div>
                                            </Modal>
                                        </Paper>
                                    </Button>
                                </Grid>
                            )}
                            {game.screenshots[2] && (
                                <Grid item xs>
                                    <Button>
                                        <Paper className={(classes.paper, "paperInnerStyle")} key={game.id}>
                                            <img className="topGameImg" src={changeOriginalImageSize(`${game.screenshots[2]}`, "cover_big")} alt=""></img>
                                        </Paper>
                                    </Button>
                                </Grid>
                            )}
                        </>
                    );
                })}
            </Grid>
        </div>
    );
}
