import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addComment } from "./Firebase";
import "./CommentForm.css";
import { auth } from "./Firebase";
import { useState } from "react";

export const CommentForm = ({ article }) => {
  const submit = () => {
    addComment(article);
  };

  const [isLogged, setIsLogged] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (!user) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  });

  if (isLogged === false) {
    return (
      <form action="" className="comment__form" noValidate autoComplete="off">
        <TextField
          disabled
          id="outlined-disabled"
          className="comment__content"
          variant="outlined"
          multiline
          rows={6}
          defaultValue="You must be logged in to comment this article"
        />
      </form>
    );
  }

  return (
    <form
      action=""
      id="comment__form"
      className="comment__form"
      noValidate
      autoComplete="off"
    >
      <TextField
        name="comment__content"
        id="comment__content"
        className="comment__content"
        label="Your comment"
        defaultValue=""
        variant="outlined"
        multiline
        rows={6}
      />
      <Button color="primary" className="comment__button" onClick={submit}>
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;
