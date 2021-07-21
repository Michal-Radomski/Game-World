import React from "react";
import "./Article.css";
import Grid from "@material-ui/core/Grid";

const Article = ({ article }) => {
  if (!article) {
    return <p>loading...</p>;
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={6}>
        <img src={article.img} className="image--main"></img>
        <div class="article--content">
          <p className="title">{article.title}</p>

          <p className="description">Description: {article.description}</p>

          <p className="context">{article.content}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Article;
