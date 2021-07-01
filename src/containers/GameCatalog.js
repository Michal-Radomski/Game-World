import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import { useTopGames } from "../components/Firebase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "30px",
        width: "90vw",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function GameCatalog() {
    const classes = useStyles();
    const topGames = useTopGames();
    function changeOriginalImageSize(image, size) {
        const splitImage = image.split("thumb");
        return `https://${splitImage[0]}${size}${splitImage[1]}`;
    }
    console.log("IMAGE---", changeOriginalImageSize("images.igdb.com/igdb/image/upload/t_thumb/npe0c8mphnlmp9elxqko.jpg", "cover_big"));
    return (
        <div className={classes.root}>
            <h2>Game catalog</h2>
            {/* <Grid container className="topGamesContainer" spacing={1}> */}
            <div className="topGamesContainer-catalog">
                {topGames.slice(10, 19).map((game) => {
                    // console.log("GGG", game);
                    return (
                        // <Grid item xs>
                        <div className="container">
                            <Button>
                                {/* <Paper className={(classes.paper, "paperInnerStyle")} key={game.id}> */}
                                <img className="topGameImg-catalog" src={changeOriginalImageSize(`${game.screenshots[0]}`, "cover_big")} alt=""></img>
                                <div className="content-game">
                                    <div className="game-info first">
                                        <h3>Title: {game.name}</h3>
                                        <h4>Release date: {game.first_release_date}</h4>
                                        {/* <h4>Genre: {game.genres[0]}</h4>
                                    <h4>Platform: {game.platforms[0]}</h4> */}
                                    </div>
                                    <div className="game-info second">
                                        <h4>Genre: {game.genres[0]}</h4>
                                        <h4>Platform: {game.platforms[0]}</h4>
                                    </div>
                                </div>
                                {/* </Paper> */}
                            </Button>
                        </div>
                        // </Grid>
                    );
                })}
            </div>
            {/* </Grid> */}
        </div>
    );
}
