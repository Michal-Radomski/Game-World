import React from "react";
import "./Article.css";
import Grid from "@material-ui/core/Grid";
import Comment from "../components/Comment";
import Score from "../components/Score";

const Article = ({ article }) => {
  if (!article) {
    return <p>loading...</p>;
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={6} id="article__container">
        <img
          src={article.img}
          alt={article.title}
          className="image--main"
        ></img>
        <div class="article--content">
          <p className="title">{article.title}</p>
          <p className="context">{article.content}</p>
        </div>
        <Score article={article} />
        <h2>Comments</h2>d
        <Comment article={article} />
      </Grid>
    </Grid>
  );
};

export default Article;
