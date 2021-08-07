import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { changeUnixTimeToDate } from "../components/Helper";
import { changeOriginalImageSize } from "../components/Helper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px auto",
    width: "90vw",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// const sortingTypes = ['first_release_date', 'rating', 'follows'];
// const filterTypes = ['storyline', 'videos', 'rating'];
const platformAll = ["Mac",
"Linux",
"Atari 5200" ,
"PC (Microsoft Windows)",
"Amiga",
"Dreamcast",
"PlayStation",
"PC DOS",
"PlayStation 3",
"Xbox 360",
"iOS",
"Xbox One",
"Nintendo Switch",
"PlayStation 4",
"Wii",
"Nintendo Entertainment System (NES)",
"Nintendo 3DS",
"Wii U",
"PlayStation 5",
"Xbox Series",
"Sega Saturn",
"Android",
"Web browser",
"Windows Phone",
"Amazon Fire TV",
"Nintendo DS",
"PlayStation 2",
"Mobile",
"Nintendo 64",
"Super Nintendo Entertainment System (SNES)",
"Super Famicom",
"Family Computer (FAMICOM)",
"Xbox",
"Google Stadia",
"Commodore C64/128",
"Game Boy Advance",
"Amstrad CPC",
"ZX Spectrum",
"MSX",
"Virtual Console (Nintendo)",
"Family Computer Disk System",
"Atari 2600",
"Atari 7800",
"Atari 8-bit",
"Intellivision",
"ColecoVision",
"Commodore VIC-20",
"Texas Instruments TI-99",
"Nintendo DSi",
"Game & Watch",
"Game Boy Color",
"Sega Mega Drive/Genesis",
"Arcade",
"Sega Master System",
"Nintendo GameCube",
"New Nintendo 3DS",
"Satellaview",
"PlayStation Vita",
"PlayStation Portable",
"Sega Game Gear",
"Atari Lynx",
"Apple II",
"Game Boy",
"OnLive Game System",]

const sortGames = (games, type) => {
  const types = {
    first_release_date: "first_release_date",
    rating: "rating",
    follows: "follows",
  };
  const sortProperty = types[type];
  const sorted = [...games].sort((a, b) =>
    a[sortProperty] !== undefined && b[sortProperty] !== undefined
      ? b[sortProperty] - a[sortProperty]
      : a[sortProperty] === undefined
      ? (a[sortProperty] = "")
      : (b[sortProperty] = "")
  );
  return sorted;
};

const filterByPlatform = (games, platform) => {
  const types = {
    mac: "Mac",
    linux: "Linux",
    pc: "PC (Microsoft Windows)",
    dreamcast: "Dreamcast",
    playStation: "PlayStation",
    pcDos: "PC DOS",
    amiga: "Amiga",
    ps3: "PlayStation 3",
    xbox360: "Xbox 360",
    ios: "iOS",
    xone: "Xbox One",
    nSwitch: "Nintendo Switch",
    all: "Mac" ||
      "Linux" ||
      "Atari 5200" ||
      "PC (Microsoft Windows)" ||
      "Amiga" ||
      "Dreamcast" ||
      "PlayStation" ||
      "PC DOS" ||
      "PlayStation 3" ||
      "Xbox 360" ||
      "iOS" ||
      "Xbox One" ||
      "Nintendo Switch" ||
      "PlayStation 4" ||
      "Wii" ||
      "Nintendo Entertainment System (NES)" ||
      "Nintendo 3DS" ||
      "Wii U" ||
      "PlayStation 5" ||
      "Xbox Series" ||
      "Sega Saturn" ||
      "Android" ||
      "Web browser" ||
      "Windows Phone" ||
      "Amazon Fire TV" ||
      "Nintendo DS" ||
      "PlayStation 2" ||
      "Mobile" ||
      "Nintendo 64" ||
      "Super Nintendo Entertainment System (SNES)" ||
      "Super Famicom" ||
      "Family Computer (FAMICOM)" ||
      "Xbox" ||
      "Google Stadia" ||
      "Commodore C64/128" ||
      "Game Boy Advance" ||
      "Amstrad CPC" ||
      "ZX Spectrum" ||
      "MSX" ||
      "Virtual Console (Nintendo)" ||
      "Family Computer Disk System" ||
      "Atari 2600" ||
      "Atari 7800" ||
      "Atari 8-bit" ||
      "Intellivision" ||
      "ColecoVision" ||
      "Commodore VIC-20" ||
      "Texas Instruments TI-99" ||
      "Nintendo DSi" ||
      "Game & Watch" ||
      "Game Boy Color" ||
      "Sega Mega Drive/Genesis" ||
      "Arcade" ||
      "Sega Master System" ||
      "Nintendo GameCube" ||
      "New Nintendo 3DS" ||
      "Satellaview" ||
      "PlayStation Vita" ||
      "PlayStation Portable" ||
      "Sega Game Gear" ||
      "Atari Lynx" ||
      "Apple II" ||
      "Game Boy" ||
      "OnLive Game System",
  };
  const filterProperty = types[platform];
  const filtered = [...games].filter((val) =>
    val.platforms.includes(filterProperty)
  );
  return filtered;
};

const filterByGenre = (games, genre) => {
  const types = {
    rpg: "Role-playing (RPG)",
    strategy: "Strategy",
    platform: "Platform",
    shooter: "Shooter",
    adventure: "Adventure",
    all: "Role-playing (RPG)" ||
      "Hack and slash/Beat 'em up" ||
      "Strategy" ||
      "Indie" ||
      "Turn-based strategy (TBS)" ||
      "Tactical" ||
      "Simulator" ||
      "Shooter" ||
      "Adventure" ||
      "Platform" ||
      "Racing" ||
      "Sport" ||
      "Arcade" ||
      "Puzzle" ||
      "MOBA" ||
      "Real Time Strategy (RTS)" ||
      "Wii" ||
      "Card & Board Game" ||
      "Point-and-click" ||
      "Visual Novel" ||
      "Fighting" ||
      "Music",
  };
  console.log("GGGG", games.follows);
  const filterProperty = types[genre];
  const filtered = [...games].filter((val) =>
    val.genres.includes(filterProperty)
  );
  return filtered;
};

const filterByProperty = (games, property) => {
  let filtered = [];
  if(property){
    filtered = [...games].filter(
        (value) => value["videos"] !== undefined
    );
  } else {
    filtered = [...games].filter(
        (value) => value["name"] !== undefined
    );
  }
  return filtered;
};

const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };



export default function GameCatalog({ topGames }) {
  // const platforms = topGames.map(game => game.platform);
  // const genres = topGames.map(game => game.genre);

  const [sortType, setSortType] = useState("rating");
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterGenre, setFilterGenre] = useState('all');
  const [filterType, setFilterType] = useState("name");
  const [checked, setChecked] = useState(false);

  const classes = useStyles();

  window.data0 = topGames;

  const data = sortGames(
    filterByPlatform(
      filterByGenre(filterByProperty(topGames, checked), filterGenre),
      filterPlatform
    ),
    sortType
  );

  return (
    <div className={classes.root}>
      <h2>Game catalog</h2>
      <ul className="topGamesContainer-catalog">
        <div className="selects">
          <select
            className="select-games"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option className="option" value="rating">
              Sort by...
            </option>
            <option className="option" value="first_release_date">
              Release
            </option>
            <option className="option" value="rating">
              Rating
            </option>
            <option className="option" value="follows">
              Follows
            </option>
          </select>
          {/* <select
            className="select-games"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option className="option" value="name">
              Filter by...
            </option>
            <option className="option" value="storyline">
              Storyline
            </option>
            <option className="option" value="videos">
              Videos
            </option>
            <option className="option" value="rating">
              Rating
            </option>
          </select> */}
          <select
            className="select-games"
            onChange={(e) => setFilterPlatform(e.target.value)}
          >
            <option className="option" value="all">
              Filter platform
            </option>
            <option className="option" value="mac">
              Mac
            </option>
            <option className="option" value="linux">
              Linux
            </option>
            <option className="option" value="pc">
              PC
            </option>
            <option className="option" value="playStation">
              PlayStation
            </option>
            <option className="option" value="ios">
              iOS
            </option>
            <option className="option" value="dreamcast">
              Dreamcast
            </option>
          </select>
          <select
            className="select-games"
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option className="option" value="all">
              Filter genre
            </option>
            <option className="option" value="platform">
              Platform
            </option>
            <option className="option" value="strategy">
              Strategy
            </option>
            <option className="option" value="rpg">
              RPG
            </option>
            <option className="option" value="shooter">
              Shooter
            </option>
            <option className="option" value="adventure">
              Adventure
            </option>
          </select>
          <div className="checkbox select-games">
            <Checkbox
                label="Video"
                value={checked}
                onChange={() => setChecked(!checked)}
            />
          </div>

        </div>
        {data.map((game, index) => {
          const humanDateFormat = changeUnixTimeToDate(game.first_release_date);
          return (
            <Link to={`/games/${game.game_id}`} key={index}>
              {/* <a href="#" onClick={() => onGameSelect(game.game_id)}> */}
              <li className="container-catalog">
                {/* TODO remove Button */}
                {/* <Button onClick={() => onGameSelect(game.game_id)} type="link" block> */}
                <Button>
                  <img
                    className="topGameImg-catalog brightness shadow"
                    src={changeOriginalImageSize(
                      `${game.screenshots[0]}`,
                      "cover_big"
                    )}
                    alt=""
                  ></img>
                  <div className="content-game">
                    <div className="content-game1">
                      <div className="game-info first">
                        <div style={{ color: "#bbc5ff" }}>{game.name}</div>
                        {game.rating && (
                          <p>
                            Rating: {Math.round(game.rating * 100) / 100}
                            <span style={{ color: "white" }}> / 100</span>
                          </p>
                        )}
                      </div>
                      <div className="game-info second">
                        <div>Release date: {humanDateFormat}</div>
                        {game.follows && <p>Follows: {game.follows}</p>}
                      </div>
                    </div>
                    <div className="inline">
                      <div className="platform-list">
                        {game.platforms.map((platform, index) => {
                          return index < game.platforms.length - 1 ? (
                            <p key={index} style={{ color: "white" }}>
                              {platform},&nbsp;
                            </p>
                          ) : (
                            <p key={index} style={{ color: "white" }}>
                              {platform}
                            </p>
                          );
                        })}
                      </div>
                      <p style={{ fontSize: "25px", margin: "auto" }}>
                        &nbsp;&nbsp;&#10172;&nbsp;&nbsp;
                      </p>
                      <div className="platform-list">
                        {game.genres.map((genre, index) => {
                          return index < game.genres.length - 1 ? (
                            <p key={index} style={{ color: "white" }}>
                              {genre},&nbsp;
                            </p>
                          ) : (
                            <p key={index} style={{ color: "white" }}>
                              {genre}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Button>
              </li>
              {/* </a> */}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}