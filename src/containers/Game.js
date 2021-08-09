import { useParams } from "react-router-dom";
import "../App.css";
import {
    changeOriginalImageSize,
    changeUnixTimeToDate,
} from "../components/Helper";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import YoutubeEmbed from "../components/YoutubeEmbed";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useModalStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        backgroundColor: "black",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Game({ games }) {
    window.scrollTo(0, 0);
    const params = useParams();
    const game = games.find((game, index) => game.game_id === parseInt(params.id));

    const modalClasses = useModalStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(null);

    if (game === undefined) {
        return games.length === 0 ? <p>Loading...</p> : <p>Game not found</p>;
    }

    const handleOpen = (img) => () => {
        setOpen(img);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>
            <div key={game.game_id}>
                <div className="game-page">
                    <h1 style={{ color: "white" }}>{game.name}</h1>

                    <div className="game-data">
                        <div>
                            <span className="game-header">Created at: </span>
                            {changeUnixTimeToDate(game.created_at)}
                        </div>
                        <div>
                            <span className="game-header">
                                First release date:{" "}
                            </span>
                            {changeUnixTimeToDate(game.first_release_date)}
                        </div>
                        <hr className="hr-visible" style={{ margin: "20px 0" }} />
                        <div>
                            <span className="game-header">Genres:</span>
                            {game.genres.map((genre, index) => {
                                return (
                                    <span key={index} className="game-header-span">
                                        {genre}
                                    </span>
                                );
                            })}
                        </div>
                        <hr className="hr-visible" style={{ margin: "20px 0" }} />
                        <div>
                            <span className="game-header">Platforms:</span>
                            {game.platforms.map((platform, index) => {
                                return (
                                    <span key={index} className="game-header-span">
                                        {platform}
                                    </span>
                                );
                            })}
                        </div>
                        {game.game_engines && <div>
                            <span className="game-header">Game engines:</span>
                            {game.game_engines.map((engines, index) => {
                                return (
                                    <span key={index} className="game-header-span">
                                        {engines}
                                    </span>
                                );
                            })}
                        </div>}
                        {(game.follows || game.rating) && <hr style={{ margin: "20px 0" }} />}
                        {game.rating && <div>
                            <span className="game-header">
                                IGDB Rating: {" "}
                            </span>
                            {Math.round(game.rating * 100) / 100}<span> / 100</span>
                            </div>}
                        {game.rating_count && <div>
                            <span className="game-header">
                                IGDB Rating count: {" "}
                            </span>
                            {game.rating_count}
                            </div>}
                        {game.follows && <div>
                            <span className="game-header">
                                IGDB Follows: {" "}
                            </span>
                            {game.follows}
                            </div>}
                        <hr style={{ margin: "40px 0" }} />
                        {game.storyline && <div className="game-description">
                            <p className="game-header">Storyline: </p>
                            {game.storyline}
                        </div>}
                        <div className="game-description">
                            <p className="game-header">Description: </p>
                            {game.summary}
                        </div>
                    </div>
                    
                    <div className="game-img">
                        {game.screenshots.map((image, index) => {
                            return (
                                <div key={index} style={{ margin: "25px" }}>
                                    <img
                                        onClick={handleOpen(image)}
                                        style={{
                                            boxShadow: "0 0 10px #28283f",
                                            cursor: "pointer",
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
                    {game.videos && <div style={{margin: "50px 0"}}>
                        { game.videos.map((video, index) => {
                            return <YoutubeEmbed embedId={video} key={index}/>
                        })

                        }
                    </div>}
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
            <Modal open={!!open} onClose={handleClose}>
                <div style={modalStyle} className={modalClasses.paper}>
                    <img style={{maxWidth: "95vw"}}
                        src={changeOriginalImageSize(
                            open || "",
                            "screenshot_big"
                        )}
                        alt=""
                    />
                </div>
            </Modal>
        </>
    );
}
