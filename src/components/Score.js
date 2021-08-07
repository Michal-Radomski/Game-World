import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
import { rateArticle } from "./Firebase";

const useStyles = makeStyles({
  root: {
    width: 250,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "row",
    color: "white",
  },
  ratingLabel: {
    fontSize: "20px",
    marginRight: "20px",
    marginTop: "5px",
  },
  emptyStar: {
    color: "white",
  },
});

export const Score = ({ article }) => {
  const [value, setValue] = React.useState(article.rating);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.ratingLabel}>Rate me: </p>
      <Rating
        name="hover-feedback"
        value={value}
        color="yellow"
        size="large"
        precision={1}
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
        }
        onChange={(event, newValue) => {
          //   setValue(newValue);
          rateArticle(article, newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </div>
  );
};
export default Score;
