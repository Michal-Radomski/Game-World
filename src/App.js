import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";
import TopGames from "./components/TopGames";
import { Sidebar } from "./components/Sidebar";
// import {addGame} from "./components/Firebase"

function App() {
    // addGame();
    return (
        <Layout>
            <div className="carouselContainer">
                <Carousel slides={slides} autoplay={true} interval={3000} />
            </div>
            <div className="side-by-side">
                <TopGames />
                <Sidebar />
            </div>
        </Layout>
    );
}

export default App;
