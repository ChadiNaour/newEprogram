import React from "react";
import BlogCardWrapper from "./blogCard.style";
import moment from "moment";
import { navigate } from "gatsby";
import "moment/locale/fr"; // Import French language pack for moment.js


const BlogCard = ({ blogContent }) => {
  const formattedDate = moment(blogContent.fields?.creationDate).locale("fr").format("DD MMMM YYYY");
  function limitText(text, limit) {
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + " ...";
    }
  }


  return (
    <BlogCardWrapper>
      <div className={`img-container ${blogContent.fields?.color}`}>
        <div className="image-wrapper" onClick={() => navigate(`/blog/${encodeURIComponent(blogContent.fields?.slug)}`)}>
          <img loading="lazy" alt="blog post" src={`https://${blogContent.fields?.coverImage.fields?.file.url}`} />
          <div className="color-badge"></div>
        </div>
      </div>
      <div className={`text-container ${blogContent.fields?.color}`}>
        <h1>{limitText(blogContent.fields?.title, 55)}</h1>
        <span>{formattedDate} par {blogContent.fields?.author}</span>
        <p>{limitText(blogContent.fields?.description, 130)}</p>
        <div className="link" onClick={() => navigate(`/blog/${encodeURIComponent(blogContent.fields?.slug)}`)}>
          Lire plus
        </div>
      </div>
    </BlogCardWrapper>
  )

}
export default BlogCard;