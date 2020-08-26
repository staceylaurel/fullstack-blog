import * as React from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

const Compose: React.FC<ComposeProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tagid, setTagid] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ authorid: 1, title, content, tagid }),
    });
    history.push("/");
  };

  React.useEffect(() => {
    API('/api/blogs', 'POST', {title, content})
    .then(result => console.log(result.insert.id))
    // const token = localStorage.getItem("token");
    // fetch("/api/compose", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({}),
    // }).then((res) => res.json())
    // .then(backFromServer => console.log(backFromServer.insertid))
  }, []);

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
