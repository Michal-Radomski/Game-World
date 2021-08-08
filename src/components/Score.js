import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { rateArticle } from "./Firebase";
import { auth } from "./Firebase";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column-reverse",
    color: "white",
  },
  ratingLabel: {
    fontSize: "20px",
    marginTop: "10px",
  },
  emptyStar: {
    color: "white",
  },
  star: {
    color: "yellow",
  },
  ratingLabelDisabled: {
    fontSize: "15px",
    marginTop: "10px",
  },
});

export const Score = ({ article }) => {
  const [value, setValue] = useState(article.rating);
  const [hover, setHover] = useState(-1);
  const [isLogged, setIsLogged] = useState(null);
  const [hasCommented, setHasCommented] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (article.raters.includes(auth.currentUser?.uid)) {
      setHasCommented(true);
      setValue(article.rating);
    } else {
      setHasCommented(false);
    }
  }, [article, isLogged]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    });
  }, []);

  if (isLogged && !hasCommented) {
    return (
      <div className={classes.root}>
        <p className={classes.ratingLabel}>Rate me :)</p>
        <Rating
          name="hover-feedback"
          value={value}
          size="large"
          precision={0.5}
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
  } else if (isLogged && hasCommented) {
    return (
      <div className={classes.root}>
        <p className={classes.ratingLabelDisabled}>
          You have already rated this article
        </p>
        <Rating
          name="hover-feedback"
          value={value}
          size="large"
          disabled
          precision={0.5}
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
  }
  return (
    <div className={classes.root}>
      <p className={classes.ratingLabelDisabled}>
        Log-in to rate this article{" "}
      </p>
      <Rating
        name="hover-feedback"
        value={value}
        size="large"
        disabled
        precision={0.5}
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
        }
        onChange={(event, newValue) => {
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
