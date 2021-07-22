import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";
import TopGames from "./components/TopGames";
import ArticleCreate from "./containers/ArticleCreate";
import { Sidebar } from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Gallery from "./containers/Gallery";
import GameCatalog from "./containers/GameCatalog";
import AboutUs from "./containers/AboutUs";
import Contact from "./containers/Contact";
import Game from "./containers/Game";
import { useTopGames } from "./components/Firebase";
import { useTopArticles } from "./components/Firebase";
import ArticleCatalog from "./containers/ArticleCatalog";
import SearchPage from "./containers/SearchPage";
import Article from "./containers/Article";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import {addGame} from "./components/Firebase"

function App() {
    // addGame();
    const games = useTopGames();
    const { push } = useHistory();
    const articles = useTopArticles();
    const route = useRouteMatch("/articles/:id");
    const [selectedArticle, setSelectedArticle] = useState(null);
    useEffect(() => {
        const selectedArticleId = route?.params.id;
        const selectedArticle =
          selectedArticleId &&
          articles.find((article) => article.id === selectedArticleId);
        setSelectedArticle(selectedArticle);
      }, [route, articles]);
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

                <Route exact path="/articles">
                    <ArticleCatalog
                        articles={articles}
                        onArticleSelect={(id) => push(`/articles/${id}`)}
                    />
                </Route>
                <Route path="/articles/:id">
                    <Article article={selectedArticle} />
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
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/search/">
                    <SearchPage games={games} articles={articles}/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
