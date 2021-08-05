import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import "./ArticleCatalog.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundImage: "src/images/zane-lee-IHj0xtWtLKE-unsplash.jpg",
  },
  gridList: {
    width: 700,
    height: "100%",
    paddingBottom: 75,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  formControl: {
    height: 120,
    minWidth: 120,
    backgroundColor: "rgb(66, 66, 206, 56%)",
    borderRadius: 5,
  },
}));

const ArticleCatalog = ({ articles }) => {
  const classes = useStyles();
  const itemData = articles;
  const [state, setState] = React.useState({
    sort: "",
  });

  const handleChange = (event) => {
    const sort = event.target.name;
    setState({
      ...state,
      [sort]: event.target.value,
    });
  };

  if (state.sort === 10) {
    itemData.sort(function (a, b) {
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
      }
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      }
      return 0;
    });
  } else if (state.sort === 20) {
    itemData.sort((a, b) => b.created - a.created);
  }

  return (
    <>
      <h2 className="subhead">Articles</h2>
      <div className={classes.root}>
        <GridList cellHeight={240} className={classes.gridList}>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            style={{
              height: 50,
              padding: 0,
              marginTop: 10,
              marginRight: 10,
              marginBottom: 50,
            }}
          >
            <InputLabel
              htmlFor="outlined-age-native-simple"
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Sort
            </InputLabel>
            <Select
              value={state.sort}
              onChange={handleChange}
              label="Sort"
              inputProps={{
                name: "sort",
              }}
              style={{ color: "white", marginBottom: 0 }}
            >
              <MenuItem value={10}>Alphabetical</MenuItem>
              <MenuItem value={20}>Recent</MenuItem>
            </Select>
          </FormControl>
          {itemData.map((tile, index) => (
            <GridListTile key={index}>
              <Link to={`/articles/${tile.id}`}>
                <img src={tile.img} alt={tile.title} className="image" />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span> {tile.description}</span>}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default ArticleCatalog;
