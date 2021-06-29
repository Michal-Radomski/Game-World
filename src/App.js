import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";
import TopGames from "./components/TopGames";
import ArticleCreate from "./containers/ArticleCreate";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import {addGame} from "./components/Firebase"

function App() {
    // addGame();
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <div className="carouselContainer">
                            <Carousel slides={slides} autoplay={true} interval={3000} />
                        </div>
                        <div className="side-by-side">
                            <TopGames />
                            <Sidebar />
                        </div>
                    </Route>
                    <Route path="/createArticle">
                        <ArticleCreate />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
