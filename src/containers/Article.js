import React from "react";
import "./Article.css";

const Article = ({ article }) => {
  return (
    <>
      <p>Title: {article.title}</p>
      <p>Description: {article.description}</p>
      <p>Content: {article.content}</p>
    </>
  );
};

export default Article;
