import { Carousel } from "3d-react-carousal";
import TopGames from "../components/TopGames";
import { Sidebar } from "../components/Sidebar";


export default function Home({list, games}){
    return(
    <>
        <div className="carouselContainer">
            <Carousel
                slides={list}
                autoplay={true}
                interval={3000}
            />
        </div>
        <div className="side-by-side">
            <TopGames topGames={games} />
            <Sidebar />
        </div>
    </>
    )
}