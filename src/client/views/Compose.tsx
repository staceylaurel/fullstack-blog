import * as React from "react";
import { useHistory } from "react-router-dom";
const Compose: React.FC<ComposeProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch("/api/newblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    history.push("/");
  };

  return (
    <div>
      <h1>Compose</h1>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

interface ComposeProps {}

export default Compose;
