import * as React from "react";
import { useParams, Link } from "react-router-dom";
import type { IBlog } from "../utils/types";

const Details: React.FC<DetailsProps> = (props) => {
  const { id } = useParams();
  const [blog, setblog] = React.useState<IBlog>(null);

  React.useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((blog) => setblog(blog));
  }, []);

  return (
    <>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
      <Link to="/">Go Back</Link>
      <Link to={`/${id}/blogadmin`}>Admin</Link>
    </>
  );
};

interface DetailsProps {}

export default Details;
