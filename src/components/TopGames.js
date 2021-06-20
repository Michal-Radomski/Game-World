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
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {topGames.slice(0, 6).map((game) => {
                    console.log("GGG", game);
                    return (
                        <Grid item xs>
                            <Paper className={classes.paper} key={game.id}>
                                <Button>
                                    <h3>{game.name}</h3>
                                    <img src={`https:${game.screenshots[0]}`} alt=""></img>
                                </Button>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
