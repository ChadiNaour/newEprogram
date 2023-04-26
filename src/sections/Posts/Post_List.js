import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import Tags from "../../components/tags";
import Button from "../../reusecore/Button";
import { FiArrowRight } from "react-icons/fi";
import { createClient } from 'contentful';

const PostListItem = ({
  title,
  excerpt,
  description,
}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({ space: "o3jb36qmo466", accessToken: "iySwG9zvadxHyPN4rzHkp1JR3p0r7-CxlEIidZDHGvQ" });

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        await client.getEntries().then((entries) => {
          //console.log(entries);
        })
      } catch (error) {
        //console.log(error);
      }
    }
    getAllPosts();
  }, [])

  const TTags = ["sfsf", "sfsf", "sfsf"];


  return (
    <StyledPostListItem>
      <div className="imageContainer">
        <div className="bottomBanner">
          <div className={{ position: "absolute", top: "0px", left: "0px" }}><Tags tags={TTags} /></div>
        </div>
        <img loading="lazy" src="https://images.unsplash.com/photo-1559719880-56b369afe6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" className="image" />
      </div>
      <PostListTitle>
        {title}
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <PostListMeta>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>Author, 22 mar 2022</span>
        <Button style={{ maxWidth: "180px" }}>
          See more
          <FiArrowRight className="icon-right" />
        </Button>
      </PostListMeta>
    </StyledPostListItem>
  );
};

const PostList = ({ posts }) => {

  return (
    <StyledPostList>
      {posts.map((post, index) => (
        <PostListItem
          key={index}
          tags={post.tags}
          title={post.title}
          date={post.date}
          slug={post.slug}
          timeToRead={posts.timeToRead}
          description={post.description}
          excerpt={post.excerpt}
        />
      ))}
    </StyledPostList>
  );
};

export default PostList;

const StyledPostList = styled.div`
  margin-top: 3rem;
  list-style: none;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledPostListItem = styled.div`
box-shadow: 0px 2px 3px 3px rgb(235,234,234);
-webkit-box-shadow: 0px 2px 3px 3px rgb(235,234,234);
-moz-box-shadow: 0px 2px 3px 3px rgb(235,234,234);
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  // transition: all 0.1s ease-out;
  body & {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);
  }
  body &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .imageContainer {
    position: relative;
    width: 100%;
    height: 230px;
    border-radius: 10px 10px 10px 10px;
  }
  .image {
    width: 100%;
    height: 100%;
    objectFit: cover;
    border-radius: 10px 10px 10px 10px;
  }
  .bottomBanner {
    position: absolute;
    bottom: 0;
    left: 0;
    // background-color: ${props => props.theme.primaryLightColor};
    padding-top: 8px;
    width: 100%;
    height: auto!important;
    padding-inline: 15px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    & {
      margin-top: 1rem;
    }
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  // color: red;
  margin-bottom: .3rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostListExcerpt = styled.p`
  // margin-top: auto;
  font-size: 1.1rem;
`;

const PostListMeta = styled.div`
  margin-top: 0rem;
  font-size: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
