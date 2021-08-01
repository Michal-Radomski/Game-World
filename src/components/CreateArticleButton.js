// Component, that creates Create Article button

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonCreateArticle = styled.button`
  background-color: var(--primary-light);
  color: white;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #2c387e;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  &:hover {
    background-color: var(--secondary-light);
    color: white;
    transition: 0.3s all;
    filter: brightness(85%);
  }
`;

export default function CreateArticleButton() {
  return (
    <ButtonCreateArticle>
      <Link to="/create-article">Create Article</Link>
    </ButtonCreateArticle>
  );
}
