import { useParams } from "react-router-dom";
import "../App.css";
import { changeOriginalImageSize } from "../components/Helper";

export default function Game({ games }) {
    const params = useParams();
    const game = games.find((game) => game.game_id === parseInt(params.id));

    if (game === undefined) {
        return games.length === 0 ? <p>Loading...</p> : <p>Game not found</p>;
    }

    return (
        <>
            <div className="blur-effect">
                <div className="game-page">
                    <h1 style={{ color: "white" }}>{game.name}</h1>
                    <p>Created at:{game.created_at}</p>
                    <p>First release date: {game.first_release_date}</p>
                    <p>Genres:</p>
                    {game.genres.map((genre) => {
                        return (
                            <span style={{ margin: "0 10px", color: "white" }}>
                                {genre}
                            </span>
                        );
                    })}
                    <p>Platforms:</p>
                    {game.platforms.map((platform) => {
                        return (
                            <span style={{ margin: "0 10px", color: "white" }}>
                                {platform}
                            </span>
                        );
                    })}
                    <p>Description: {game.summary}</p>
                    <div style={{ display: "inline-flex" }}>
                        {game.screenshots.map((image) => {
                            return (
                                <div>
                                    <img
                                        src={changeOriginalImageSize(
                                            `${image}`,
                                            "cover_big"
                                        )}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <a
                        href={game.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            backgroundColor: "darkred",
                            borderRadius: "5px",
                            padding: "20px",
                            marginBottom: "50px",
                        }}
                    >
                        Read more about {game.name}
                    </a>
                </div>
            </div>
        </>
    );
}
