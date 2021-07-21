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

export default function SearchPage({games}){
    const classes = useStyles();
    const searchPath = window.location.search;
    // console.log("Search... ", searchPath)
    const searchQuery = searchPath.slice(7);
    // console.log("Search qqq ", searchQuery);
    const phrase = decodeURIComponent(searchQuery);    
    console.log("Decode ", phrase);
    const phraseTable = phrase.toLowerCase().split(" ");
    console.log("Table ", phraseTable);

    const gamesResult = () => {
        let resultGameTable = [];
        phraseTable.forEach(phrase => {
            const results = games.filter(game => game.name.toLowerCase().includes(phrase));
            resultGameTable = [...resultGameTable, ...results]
            console.log("ress1", results);
            console.log("ress2", resultGameTable);
        })
        return resultGameTable;
    }

    return(
    <>
        <h2>Results for: <span style={{color: "yellow"}}>{phrase}</span></h2>
        <div className={(classes.root, "search-page")} >
            {console.log("len", gamesResult().length)}
        {gamesResult().length > 0 && <h3 style={{color: "white", marginLeft: "5vw", fontSize: "23px"}}>Games:</h3>}
        {gamesResult().map((game, index)=>{
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
                                    <h3>Title: {game.name}</h3>
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
        </div>
    </>

    )
}