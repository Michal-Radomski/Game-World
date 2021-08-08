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
    amiga: "Amiga",
    dos: "PC DOS",
    xbox: "Xbox",
    xone: "Xbox One",
    ps2: "PlayStation 2",
    ps4: "PlayStation 4",
    ps5: "PlayStation 5",
    pvita: "PlayStation Vita",
    wii: "Wii",
    wiiu: "Wii U",
    nes: "Nintendo Entertainment System (NES)",
    snes: "Super Nintendo Entertainment System (SNES)",
    n3ds: "Nintendo 3DS",
    xseries: "Xbox Series",
    c64: "Commodore C64/128",
    mobile: "Mobile",
    msx: "MSX",
    atari7800: "Atari 7800",
    gameboy: "Game Boy",
    all: "all",
  };
  const filterProperty = types[platform];
  const filtered = filterProperty == "all" ? games : [...games].filter((val) =>
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
    indie: "Indie",
    tbs: "Turn-based strategy (TBS)",
    tactical: "Tactical",
    simulator: "Simulator",
    racing: "Racing",
    sport: "Sport",
    puzzle: "Puzzle",
    moba: "MOBA",
    rts: "Real Time Strategy (RTS)",
    card: "Card & Board Game",
    fighting: "Fighting",
    music: "Music",
    all: "all",
  };
//   console.log("GGGG", games.follows);
  const filterProperty = types[genre];
  const filtered = filterProperty == "all" ? games : [...games].filter((val) =>
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
    filtered = games;
  }
  console.log("Videos", filtered.length);
  return filtered;
};

const Checkbox = ({ label, value, onChange }) => {
    console.log("CHHHH", value)
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

export default function GameCatalog({ topGames }) {
  const [sortType, setSortType] = useState("rating");
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterGenre, setFilterGenre] = useState('all');
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const data = sortGames(
    filterByPlatform(
      filterByGenre(filterByProperty(topGames, checked), filterGenre),
      filterPlatform
    ),
    sortType
  );

  return (
    <div className={classes.root}>
      <h2 style={{marginLeft: "5.5vw"}}>Game catalog</h2>
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
          <select
            className="select-games"
            onChange={(e) => setFilterPlatform(e.target.value)}
          >
            <option className="option" value="all">
              Filter platform
            </option>
            <option className="option" value="xbox">
            Xbox
            </option>
            <option className="option" value="xone">
            Xbox One
            </option>
            <option className="option" value="ps2">
            PlayStation 2
            </option>
            <option className="option" value="ps4">
            PlayStation 4
            </option>
            <option className="option" value="ps5">
            PlayStation 5
            </option>
            <option className="option" value="pvita">
            PlayStation Vita
            </option>
            <option className="option" value="wii">
            Wii
            </option>
            <option className="option" value="mac">
              Mac
            </option>
            <option className="option" value="linux">
              Linux
            </option>
            <option className="option" value="ios">
              iOS
            </option>
            <option className="option" value="amiga">
            Amiga
            </option>
            <option className="option" value="pc">
            PC
            </option>
            <option className="option" value="dos">
            PC DOS
            </option>
            <option className="option" value="n3ds">
            Nintendo 3DS
            </option>
            <option className="option" value="xseries">
            Xbox Series
            </option>
            <option className="option" value="c64">
            Commodore C64/128
            </option>
            <option className="option" value="msx">
            MSX
            </option>
            <option className="option" value="atari7800">
            Atari 7800
            </option>
            <option className="option" value="gameboy">
            Game Boy
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
            <option className="option" value="indie">
              Indie
            </option>
            <option className="option" value="tbs">
            Turn-based strategy
            </option>
            <option className="option" value="tactical">
            Tactical
            </option>
            <option className="option" value="simulator">
            Simulator
            </option>
            <option className="option" value="racing">
            Racing
            </option>
            <option className="option" value="sport">
            Sport
            </option>
            <option className="option" value="puzzle">
            Puzzle
            </option>
            <option className="option" value="moba">
            MOBA
            </option>
            <option className="option" value="rts">
            Real Time Strategy
            </option>
            <option className="option" value="card">
            Card & Board Game
            </option>
            <option className="option" value="fighting">
            Fighting
            </option>
            <option className="option" value="music">
            Music
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