import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { changeUnixTimeToDate } from "../components/Helper";
import { changeOriginalImageSize } from "../components/Helper";

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

export default function GameCatalog({ topGames }) {
    const classes = useStyles();
    // function changeOriginalImageSize(image, size) {
    //     const splitImage = image.split("thumb");
    //     return `https://${splitImage[0]}${size}${splitImage[1]}`;
    // }

    return (
        <div className={classes.root}>
            <h2>Game catalog</h2>
            <ul className="topGamesContainer-catalog">
                {topGames.map((game, index) => {
                    const humanDateFormat = changeUnixTimeToDate(
                        game.first_release_date
                    );
                    return (
                        <Link to={`/games/${game.game_id}`} key={index}>
                            {/* <a href="#" onClick={() => onGameSelect(game.game_id)}> */}
                            <li className="container-catalog">
                                {/* TODO remove Button */}
                                {/* <Button onClick={() => onGameSelect(game.game_id)} type="link" block> */}
                                <Button>
                                    <img
                                        className="topGameImg-catalog brightness shadow"
                                        src={changeOriginalImageSize(
                                            `${game.screenshots[0]}`,
                                            "cover_big"
                                        )}
                                        alt=""
                                    ></img>
                                    <div className="content-game">
                                        <div className="game-info first">
                                            <h3>{game.name}</h3>
                                            <h4>
                                                Release date: {humanDateFormat}
                                            </h4>
                                        </div>
                                        <div className="game-info second">
                                            <h4>Genre: {game.genres[0]}</h4>
                                            <h4>
                                                Platform: {game.platforms[0]}
                                            </h4>
                                        </div>
                                    </div>
                                </Button>
                            </li>
                            {/* </a> */}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
