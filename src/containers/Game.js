import { useParams } from "react-router-dom";

export default function Game() {
    const { game } = useParams();
    return (
        <>
            <div>
                <h1>{game.name}</h1>
                <p>Created at:{game.created_at}</p>
                <p>First release date: {game.first_release_date}</p>
                <p>Description: {game.summary}</p>
                <p>Genres:</p>
                {game.genres.map((genre) => {
                    return <p>{genre}</p>;
                })}
                <p>Platforms:</p>
                {game.platforms.map((platform) => {
                    return <p>{platform}</p>;
                })}
                {/* <p>{screenshots}</p> */}
                {/* <p>URL: {url}</p> */}
            </div>
        </>
    );
}
