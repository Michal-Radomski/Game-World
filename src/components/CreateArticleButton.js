// Component, that creates Create Article button

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const ButtonCreateArticle = styled.button`
  background-color: var(--primary);
  color: white !important;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid white !important;
  border-radius: 5px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box !important;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  display: inline-flex;
  a {
    color: inherit;
    background-color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
      background-color: inherit;
    }
  }
  &:hover {
    background-color: var(--secondary);
    color: white !important;
    transition: 0.3s all;
    border: 1px solid var(--secondary) !important;
    filter: brightness(100%) !important;
  }
`;

export default function CreateArticleButton() {
  return (
    <ButtonCreateArticle>
      <Link to="/create-article">
        {" "}
        <MenuBookIcon style={{float: "left"}} />
        &nbsp;&nbsp;&nbsp;Create Article
      </Link>
    </ButtonCreateArticle>
  );
}
