import React from "react";
import { CommentForm } from "./CommentForm";
import Container from "@material-ui/core/Container";
import "./Comment.css";

const Comment = ({ article }) => {
  console.log(article);
  if (article.comments == null || article.comments.length === 0) {
    return (
      <Container className="field">
        <p className="comment-none">
          There is no single comment for this article. Add one to be first!
        </p>
        <CommentForm article={article} />
      </Container>
    );
  }

  return (
    <Container className="field">
      {article.comments.map((comment, index) => (
        <div className="comment" key={index}>
          <p>{comment.content}</p>
          <div className="details">
            <p className="detail">Author: {comment.author}</p>
            <p className="detail">Date: {comment.date}</p>
          </div>
        </div>
      ))}
      <CommentForm article={article} />
    </Container>
  );
};

export default Comment;
