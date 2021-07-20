export default function SearchPage({games}){
    const searchPath = window.location.search;
    // console.log("Search... ", searchPath)
    const searchQuery = searchPath.slice(7);
    // console.log("Search qqq ", searchQuery);
    const phrase = decodeURIComponent(searchQuery);
    console.log("Decode ", phrase);
    const phraseTable = phrase.toLowerCase().split(" ");
    console.log("Table ", phraseTable);

    const gamesResult = () => {
        let resultGameTable = [];
        phraseTable.forEach(phrase => {
            const results = games.filter(game => game.name.toLowerCase().includes(phrase));
            resultGameTable = [...resultGameTable, ...results]
            console.log("ress1", results);
            console.log("ress2", resultGameTable);
        })
        return resultGameTable;
    }
    
    return(
    <>
        <h2>Results for: <span style={{color: "yellow"}}>{phrase}</span></h2>
        {gamesResult().map((game)=>{
            return <p>{game.name}</p>
        })}
    </>

    )
}