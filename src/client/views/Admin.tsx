import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import  api from "../utils/api-service"

const Admin: React.FC<AdminProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tagid, setTagid] = React.useState("");

  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api(`/api/blogs/${id}`, "DELETE");
    history.push("/");
  };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api(`/api/blogs/${id}`, "PUT", { title, content });
    history.push("/");
  };

  React.useEffect(() => {
    api(`/api/blogs/${id}`).then(blog => {
        setTitle(blog.title);
        setContent(blog.content);
  });
  }, []);

  return (
    <>
      <h1>Editing Page</h1>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <input value={tagid} onChange={(e) => setTagid(e.target.value)} />
        <button onClick={handleEdit}> Somebody Save Me! </button>
        <button onClick={handleDelete}> Delete </button>
      </form>
    </>
  );
  
};

interface AdminProps {
}

export default Admin;
