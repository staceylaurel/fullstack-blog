import * as React from "react";
import { useState, useEffect } from "react";
import { IBlog } from "../utils/types";

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="col-md-7">
      <div className="card bg-info text-white">
        <div className="card-header text-danger">{blog.title}</div>
        <div className="card-body">
          <p className="card-title trxt-warning">{blog.content}</p>
          <h6 className="card-footer text-danger">{blog._created}</h6>
        </div>
      </div>
    </div>
  );
};

interface BlogCardProps {
  blog: IBlog;
}

export default BlogCard;
