import React from "react";
import "./Blog.css"
const Blog = ({ blog }) => {
  const { _id, name, img, description } = blog;
  return (
    <div className="single-blog my-12">
      <img src={img} alt="" />
      <div>
        <h2 className="text-3xl text-primary">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
