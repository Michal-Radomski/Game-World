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

export default function SearchPage({games, articles}){
    const classes = useStyles();
    const searchPath = window.location.search;
    // console.log("Search... ", searchPath)
    const searchQuery = searchPath.slice(7);
    // console.log("Search qqq ", searchQuery);
    const phrase = decodeURIComponent(searchQuery);    
    // console.log("Decode ", phrase);
    const phraseTable = phrase.toLowerCase().split(" ");
    // console.log("Table ", phraseTable);

    const gamesResult = () => {
        let resultGameTable = [];
        phraseTable.forEach(phrase => {
            const results = games.filter(game => game.name.toLowerCase().includes(phrase));
            resultGameTable = [...resultGameTable, ...results]
        })
        return resultGameTable;
    }
    const articlesResult = () => {
        let resultArticleTable = [];
        phraseTable.forEach(phrase => {
            const results = articles.filter(article => article.title.toLowerCase().includes(phrase));
            resultArticleTable = [...resultArticleTable, ...results]
        })
        return resultArticleTable;
    }

    const convertDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date);
    }
    console.log("ART", articles);
    return(
    <>
        <h2>Results for: <span style={{color: "yellow"}}>{phrase}</span></h2>
        <div className={(classes.root, "search-page")}>
            {console.log("len", gamesResult().length)}
            {gamesResult().length > 0 && <h3 style={{color: "white", marginLeft: "5vw", fontSize: "23px"}}>Games:</h3>}
            {gamesResult().length === 0 && <h3 style={{color: "white", marginLeft: "5vw", fontSize: "23px"}}>No games found :(</h3>}
            <ul className="topGamesContainer-catalog">
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
                                        <div className="content-game1">
                                        <div className="game-info first">
                                            <div style={{color: "#bbc5ff"}}>{game.name}</div>
                                            {game.rating && <p>Rating: {Math.round(game.rating * 100) / 100}<span style={{color: "white"}}> / 100</span></p>}
                                        </div>
                                        <div className="game-info second">
                                            <div>
                                            Release date: {humanDateFormat}
                                            </div>
                                            {game.follows && <p>Follows: {game.follows}</p>}
                                        </div>
                                        </div>
                                        <div className="inline">
                                        <div className="platform-list">
                                            {game.platforms.map((platform, index) => {
                                                return  (index < game.platforms.length - 1) ? <p key={index} style={{color: "white"}}>{platform},&nbsp;</p> : <p key={index} style={{color: "white"}}>{platform}</p>
                                            })}
                                        </div>
                                        <p style={{fontSize: "25px", margin: "auto"}}>&nbsp;&nbsp;&#10172;&nbsp;&nbsp;</p>
                                        <div className="platform-list">
                                            {game.genres.map((genre, index) => {
                                                return  (index < game.genres.length - 1) ? <p key={index} style={{color: "white"}}>{genre},&nbsp;</p> : <p key={index} style={{color: "white"}}>{genre}</p>
                                            })}
                                        </div>
                                        </div>
                                    </div>
                                </Button>
                            </li>
                            {/* </a> */}
                        </Link>
                    );
                })}
            </ul>
            {articlesResult().length > 0 && <h3 style={{color: "white", marginLeft: "5vw", fontSize: "23px"}}>Articles:</h3>}
            {articlesResult().length === 0 && <h3 style={{color: "white", marginLeft: "5vw", fontSize: "23px"}}>No articles found :(</h3>}
            <ul className="topGamesContainer-catalog">
                {articlesResult().map((article, index) => {
                    return (
                        <Link to={`/articles/${article.id}`} key={index}>
                            <li className="container-catalog">
                                {/* TODO remove Button */}
                                {/* <Button onClick={() => onGameSelect(game.game_id)} type="link" block> */}
                                <Button>
                                    <img src={article.img} alt={article.title} 
                                    className="topGameImg-catalog brightness shadow"
                                    style={{width: "270px"}}
                                    />
                                    <div className="content-game">
                                        <div className="game-info first">
                                            <h3>Title: {article.title}</h3>
                                            <h4>
                                                Created at: {convertDate(article.created)}
                                            </h4>
                                        </div>
                                    </div>
                                </Button>
                            </li>
                            {/* </a> */}
                        </Link>
                    )
                })}
            </ul>
        </div>
    </>

    )
}