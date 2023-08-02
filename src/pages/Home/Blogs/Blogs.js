import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
      console.log(blogs)
  }, []);
  return (
    <div className="my-24 mt-80">
      <h4 className="text-5xl text-extrabold text-center text-info mb-24">Blogs</h4>
        {
          blogs.map(blog=> <Blog key={blog._id} blog={blog}></Blog>)
        }
    </div>
  );
};

export default Blogs;
