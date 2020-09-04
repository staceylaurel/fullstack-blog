import * as React from "react";
import { IBlog } from "../utils/types";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="col-md-7 p-3 border bg-light">
      <div className="card bg-success text-info shadow">
        <div className="card-header text-danger badge badge-primary text-wrap">{blog.title}</div>
        <div className="card-body">
          <p className="card-title text-warning-center">{blog.content}</p>
          <p className="card-footer text-danger-align-right ">{moment().format("MMM Do YY")}</p>
          <Link to= {`/${blog.id}/blogdetails`} >Go To Details</Link>
        </div>
      </div>
    </div>
  );
};

interface BlogCardProps {
  blog: IBlog;
}

export default BlogCard;
