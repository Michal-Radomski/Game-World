import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";
import TopGames from "./components/TopGames";

function App() {
    return (
        <Layout>
            <Carousel slides={slides} autoplay={true} interval={3000} />
            <TopGames />
        </Layout>
    );
}

export default App;
