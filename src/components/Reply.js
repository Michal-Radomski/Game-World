import React from "react";
import "./Reply.css";
import { useState } from "react";
import Container from "@material-ui/core/Container";

export const Reply = ({ comment }) => {
  if (comment.replies == null || comment.replies.length === 0) {
    return null;
  }

  return (
    <Container className="field__reply">
      {comment.replies.map((comment, index) => (
        <div className="reply" key={index}>
          <p>{comment.content}</p>
          <div className="details--secondary">
            <p className="detail--secondary">Author: {comment.author}</p>
            <p className="detail--secondary">Date: {comment.date}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Reply;
