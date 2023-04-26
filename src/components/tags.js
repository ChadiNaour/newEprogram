import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

const Tags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map((tag) => {
          return (
            <Tag key={tag}>
              #{tag}
            </Tag>
          );
        })}
    </div>
  );
};

export default Tags;

const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: var(--size-300);
    position: relative;
    z-index: 2;
    text-decoration: none;
    color: white;
    padding: 0.2rem 0.6rem;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.25);

  & :hover {
    background-color: rgba(255, 255, 255, .2);
  }

  body {
    backdrop-filter: blur(10px);
    border: 1.2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  body &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: ${props => props.theme.primaryLightColor};
  }
`;
