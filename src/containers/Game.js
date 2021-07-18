import { useParams } from "react-router-dom";
import "../App.css";
import {
    changeOriginalImageSize,
    changeUnixTimeToDate,
} from "../components/Helper";

export default function Game({ games }) {
    const params = useParams();
    const game = games.find((game) => game.game_id === parseInt(params.id));

    if (game === undefined) {
        return games.length === 0 ? <p>Loading...</p> : <p>Game not found</p>;
    }

    return (
        <>
            <div>
                <div className="game-page">
                    <h1 style={{ color: "white" }}>{game.name}</h1>

                    <div className="game-data">
                        <p>
                            <span className="game-header">Created at: </span>
                            {changeUnixTimeToDate(game.created_at)}
                        </p>
                        <p>
                            <span className="game-header">
                                First release date:{" "}
                            </span>
                            {changeUnixTimeToDate(game.first_release_date)}
                        </p>
                        <p>
                            <span className="game-header">Genres:</span>
                            {game.genres.map((genre) => {
                                return (
                                    <span className="game-header-span">
                                        {genre}
                                    </span>
                                );
                            })}
                        </p>
                        <p>
                            <span className="game-header">Platforms:</span>
                            {game.platforms.map((platform) => {
                                return (
                                    <span className="game-header-span">
                                        {platform}
                                    </span>
                                );
                            })}
                        </p>
                        <hr style={{ margin: "40px 0" }} />
                        <p className="game-description">
                            <p className="game-header">Description: </p>
                            {game.summary}
                        </p>
                    </div>
                    <div>
                        {game.screenshots.map((image) => {
                            return (
                                <div style={{ margin: "25px" }}>
                                    <img
                                        style={{
                                            boxShadow: "0 0 10px #28283f",
                                        }}
                                        src={changeOriginalImageSize(
                                            `${image}`,
                                            "screenshot_med"
                                        )}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <a
                            className="btn-read-more"
                            href={game.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read more about {game.name}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
