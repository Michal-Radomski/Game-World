import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addReply } from "./Firebase";
import "./ReplyForm.css";
import { auth } from "./Firebase";
import { useState } from "react";

export const ReplyForm = ({ article, comment }) => {
  const submit = (e) => {
    e.preventDefault();
    addReply(article, comment);
  };

  return (
    <form
      action=""
      id="reply__form"
      className="reply__form"
      noValidate
      autoComplete="off"
    >
      <TextField
        name="reply__content"
        id="reply__content"
        className="reply__content"
        label="Your reply"
        defaultValue=""
        variant="outlined"
        multiline
        rows={6}
      />
      <Button color="primary" className="reply__button" onClick={submit}>
        Add Reply
      </Button>
    </form>
  );
};

export default ReplyForm;
