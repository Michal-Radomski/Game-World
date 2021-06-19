import "./App.css";
import Layout from "./components/Layout";
import { Carousel } from "3d-react-carousal";
import { slides } from "./components/Slides";

function App() {
    return (
        <Layout>
            <Carousel slides={slides} autoplay={true} interval={3000} />
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
            <p>Tu ma być kontent</p>
        </Layout>
    );
}

export default App;
