import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { changeOriginalImageSize } from "../components/Helper";

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

export default function TopGames({ topGames }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2>Top games</h2>
            <Grid container className="topGamesContainer" spacing={3}>
                {topGames.slice(10, 19).map((game, index) => {
                    return (
                        <Grid item xs key={index}>
                            <Link to={`/games/${game.game_id}`}>
                                <Paper
                                    className={
                                        (classes.paper, "paperInnerStyle")
                                    }
                                >
                                    <h3>{game.name}</h3>
                                    <img
                                        className="topGameImg brightness"
                                        src={changeOriginalImageSize(
                                            `${game.screenshots[0]}`,
                                            "cover_big"
                                        )}
                                        alt=""
                                    ></img>
                                </Paper>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
