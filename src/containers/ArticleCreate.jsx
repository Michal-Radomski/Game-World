
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./ArticleCreate.css";
import { addArticle } from '../components/Firebase';


  const ArticleCreate = () => {
    // const [isSubmited, setIsSubmited] = useState(false);
    // const submit = () => setIsSubmited(!isSubmited);
    
  return (
    <Container id="field">
      <h1>Create new Article!</h1>
    <form action="" id="articleForm" className= "form" noValidate autoComplete="off" >
       <TextField name="title" id="articleTitle" label="Title" />
       <TextField name="description" id="articleDescription" label="Description" />
       <TextField name="content" id="articleContent" label="Content" multiline rows={6} />
       <TextField name="img" id="articleImg" label="Img" />
      <Button color="primary" onClick={addArticle}>
          Create Article
        </Button>
    </form>
    </Container>
  );
};


export default ArticleCreate;
