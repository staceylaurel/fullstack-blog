import * as React from "react";
import { useParams, Link } from "react-router-dom";
import type { IBlog } from "../utils/types";
import api from "../utils/api-service";

const Details: React.FC<DetailsProps> = (props) => {
  const { id } = useParams();
  const [blog, setblog] = React.useState<IBlog>(null);
  const [tags, setTags] = React.useState<{name:string}[]>([]);

  React.useEffect(() => {
    api(`/api/blogs/${id}`).then((blog) => setblog(blog));
  }, []);

  React.useEffect(() => {
    api(`/api/blogtags/${id}`).then((tags) => setTags(tags));
  }, []);

  return (
    <div className="row m-3 d-inline-flex margin: auto p-2 bd-highlight col-sm-6 18rem">
      <div className="card flex-center">
        <h1>{blog?.title}</h1>
        <p>{blog?.content}</p>
        {tags.map((tag) => (
          <span className="badge badge-pill badge-primary p-2" key={tag.name}>
            {tag.name}
          </span>
        ))}
        <Link to="/">Go Back</Link>
        <Link to={`/${id}/blogadmin`}>Admin</Link>
      </div>
    </div>
  );
};

interface DetailsProps {}

export default Details;
