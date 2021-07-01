import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTopGames } from "./Firebase";
import { Button } from "@material-ui/core";

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

export default function TopGames() {
    const classes = useStyles();
    const topGames = useTopGames();
    function changeOriginalImageSize(image, size) {
        const splitImage = image.split("thumb");
        return `https://${splitImage[0]}${size}${splitImage[1]}`;
    }
    console.log("IMAGE---", changeOriginalImageSize("images.igdb.com/igdb/image/upload/t_thumb/npe0c8mphnlmp9elxqko.jpg", "cover_big"));
    return (
        <div className={classes.root}>
            <h2>Top games</h2>
            <Grid container className="topGamesContainer" spacing={3}>
                {topGames.slice(10, 19).map((game) => {
                    // console.log("GGG", game);
                    return (
                        <Grid item xs>
                            <Button>
                                <Paper className={(classes.paper, "paperInnerStyle")} key={game.id}>
                                    <h3>{game.name}</h3>
                                    <img className="topGameImg brightness" src={changeOriginalImageSize(`${game.screenshots[0]}`, "cover_big")} alt=""></img>
                                </Paper>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
