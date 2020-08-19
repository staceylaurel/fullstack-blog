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
    <div className="row m-3 d-inline-flex p-2 bd-highlight col-sm-6 18rem">
      <div className="card flex-center">
        <h1>{blog?.title}</h1>
        <p>{blog?.content}</p>
        <Link to="/">Go Back</Link>
        <Link to={`/${id}/blogadmin`}>Admin</Link>
      </div>
    </div>
  );
};

interface DetailsProps {}

export default Details;
