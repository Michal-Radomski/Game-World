import { Carousel } from "3d-react-carousal";
import TopGames from "../components/TopGames";
import { Sidebar } from "../components/Sidebar";


export default function Home({list, games}){
    return(
    <>
        <div className="carouselContainer">
            {list.length > 0 && <Carousel
                slides={list}
                autoplay={false}
                interval={3000}
            />}
        </div>
        <div className="side-by-side">
            <TopGames topGames={games} />
            <Sidebar />
        </div>
    </>
    )
}