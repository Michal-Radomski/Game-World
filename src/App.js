import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";
import TopGames from "./components/TopGames";
import ArticleCreate from "./containers/ArticleCreate";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Gallery from "./containers/Gallery";
import GameCatalog from "./containers/GameCatalog";
import AboutUs from "./containers/AboutUs";
import Contact from "./containers/Contact";
import Game from "./containers/Game";
import { useTopGames } from "./components/Firebase";
import ArticleCatalog from "./containers/ArticleCatalog";
// import {addGame} from "./components/Firebase"

function App() {
    // addGame();
    const games = useTopGames();
    const selectedGameId = useRouteMatch("/games/:id")?.params.id;
    const selectedGame = games.find((game) => game.game_id === selectedGameId);
    console.log("selectedGame", selectedGame);
    console.log("All games", games);
    console.log("selectedGameId", selectedGameId);
    console.log(
        "game3",
        games.find((game) => game.game_id === 10)
    );
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <div className="carouselContainer">
                        <Carousel
                            slides={slides}
                            autoplay={true}
                            interval={3000}
                        />
                    </div>
                    <div className="side-by-side">
                        <TopGames topGames={games} />
                        <Sidebar />
                    </div>
                </Route>
                <Route path="/articles">
                    <ArticleCatalog />
                </Route>
                <Route path="/create-article">
                    <ArticleCreate />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route exact path="/games">
                    <GameCatalog topGames={games} />
                </Route>
                <Route exact path="/games/:id">
                    <Game games={games} />
                </Route>

                <Route path="/about-us">
                    <AboutUs />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
