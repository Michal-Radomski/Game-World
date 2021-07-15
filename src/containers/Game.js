import { useParams } from "react-router-dom";
import "../App.css";
import { changeOriginalImageSize } from "../components/Helper";
// import { useTopGames } from "../components/Firebase";

export default function Game({ games }) {
    // const games = useTopGames();
    // console.log("GGGGG", games);

    // console.log("game4", game);
    const params = useParams();
    const game = games.find((game) => game.game_id === parseInt(params.id));
    console.log("----Games----", games);
    console.log("----Game----", game);
    console.log("----Par----", typeof params.id);

    // console.log("xxx", game);
    // const game = {
    //     name: "Cyber Punk",
    //     created_at: "12.01.2010",
    //     first_release_date: "15.02.2021",
    //     platforms: ["PC", "CBOX", "Wii"],
    //     genres: ["action", "RPG"],
    //     screenshots: ["images.igdb.com/igdb/image/upload/t_thumb/sxmocemxh7fdc8szw4y8.jpg", "images.igdb.com/igdb/image/upload/t_thumb/sc75co.jpg", "images.igdb.com/igdb/image/upload/t_thumb/n5lfib14zsif7iojl01c.jpg"],
    //     url: "https://www.igdb.com/games/subnodule",
    //     summary: "You control a submarine in hostile waters. Sharing the deep sea with you are several dangerous creatures such as jellyfish, eels, sharks and the mysterious X-Sub. Destroy everything to reach the next level. This game has intermissions as well.",
    // };
    return (
        <>
            <div className="blur-effect">
                <div className="game-page">
                    <h1 style={{ color: "white" }}>{game.name}</h1>
                    <p>Created at:{game.created_at}</p>
                    <p>First release date: {game.first_release_date}</p>
                    <p>Genres:</p>
                    {game.genres.map((genre) => {
                        return <span style={{ margin: "0 10px", color: "white" }}>{genre}</span>;
                    })}
                    <p>Platforms:</p>
                    {game.platforms.map((platform) => {
                        return <span style={{ margin: "0 10px", color: "white" }}>{platform}</span>;
                    })}
                    <p>Description: {game.summary}</p>
                    <div style={{ display: "inline-flex" }}>
                        {game.screenshots.map((image) => {
                            return (
                                <div>
                                    <img src={changeOriginalImageSize(`${image}`, "cover_big")} alt="" />
                                </div>
                            );
                        })}
                    </div>
                    <a href={game.url} target="_blank" rel="noreferrer" style={{ backgroundColor: "darkred", borderRadius: "5px", padding: "20px", marginBottom: "50px" }}>
                        Read more about {game.name}
                    </a>
                </div>
            </div>
        </>
    );
}
