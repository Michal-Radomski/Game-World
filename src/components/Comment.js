import React from "react";
import { CommentForm } from "./CommentForm";
import { Reply } from "./Reply";
import { ReplyForm } from "./ReplyForm";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import "./Comment.css";

const Comment = ({ article }) => {
  const [showResults, setShowResults] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const showForm = () => {
    setShowResults(true);
    setShowButton(false);
  };
  const hideForm = () => {
    setShowResults(false);
    setShowButton(true);
  };

  console.log(document.getElementById("form__reply"));
  if (article.comments == null || article.comments.length === 0) {
    return (
      <Container className="field__comment">
        <p className="comment-none">
          There is no single comment for this article. Add one to be first!
        </p>
        <CommentForm article={article} />
      </Container>
    );
  }

  return (
    <Container className="field__comment">
      {article.comments.map((comment, index) => (
        <div className="comment" key={index}>
          <p>{comment.content}</p>
          <div className="details">
            <p className="detail">Author: {comment.author}</p>
            <p className="detail">Date: {comment.date}</p>
          </div>
          <Reply comment={comment} />

          {showButton ? (
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Button
                color="primary"
                className="button--reply"
                onClick={showForm}
                key={index}
              >
                Reply
              </Button>
            </div>
          ) : null}
          {showResults ? (
            <>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button
                  color="primary"
                  className="button--reply"
                  onClick={hideForm}
                  key={index}
                >
                  Cancel
                </Button>
              </div>
              <ReplyForm
                className="form__reply"
                article={article}
                comment={comment}
                key={index}
              />
            </>
          ) : null}
        </div>
      ))}
      <CommentForm article={article} />
    </Container>
  );
};

export default Comment;
