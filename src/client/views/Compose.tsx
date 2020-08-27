import * as React from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/api-service";

const Compose: React.FC<ComposeProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tagid, setTagid] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api("/api/blogs", "POST", {authorid: 1, title, content})
    history.push("/");
  };

    return (
    <div>
      <h1>Write a New Blog</h1>
      <form className="form-group border border-primary rounded shadow-lg p-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          className="size= 50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input value={tagid} onChange={(e) => setTagid(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

interface ComposeProps {}

export default Compose;
