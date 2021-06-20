import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { getTopGames } from "./Firebase";
import { useGame } from "./Firebase";
import { Button } from "@material-ui/core";
// import { useState } from "react";

// getTopGames();
// const games = getGames();
// .then(console.log(data => console.log(data)));

// getGame(0);

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
    const game = useGame(0);
    console.log("game", game.screenshots);

    // const getImage = getGame(0).data();

    // console.log("game1", getImage.screenshots);
    // console.log("name", game.name);

    // game0.screenshots.forEach((item) => {
    //     console.log("item", item);
    // });
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{game.name}</h3>
                            {/* {console.log("game", game.screenshots)} */}
                            {/* <img src={useGame(0).screenshots[0]}></img> */}
                            <img src="https://images.igdb.com/igdb/image/upload/t_thumb/gosapirsvvmeeckxlhri.jpg" alt=""></img>
                        </Paper>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{useGame(1).name}</h3>
                            {/* <img src={useGame(1).screenshots[0]}></img> */}
                        </Paper>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{useGame(2).name}</h3>
                            {/* <img src={useGame(2).screenshots[0]}></img> */}
                        </Paper>
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{useGame(3).name}</h3>
                            {/* <img src={useGame(3).screenshots[0]}></img> */}
                        </Paper>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{useGame(4).name}</h3>
                            {/* <img src={useGame(4).screenshots[0]}></img> */}
                        </Paper>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button>
                        <Paper className={classes.paper}>
                            <h3>{useGame(5).name}</h3>
                            {/* <img src={useGame(5).screenshots[0]}></img> */}
                        </Paper>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
