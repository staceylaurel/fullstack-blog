import * as React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../utils/api-service";

const Contact: React.FC<ContactProps> = (props) => {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = await api("/api/contact", "POST", {name, subject, message});
    localStorage.setItem('token', token);
    history.push("/profile");
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center p-2">Contact</h1>
        <form className="form-group border border-primary rounded shadow-lg p-3">
          <div className="form-group">
            <label>Name</label>
            <input
              value={name} onChange={(e) => setName(e.target.value)}
              type="name"
              className="form-control"
              id="exampleInputname1"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              value={subject} onChange={(e) => setSubject(e.target.value)}
              type="subject"
              className="form-control"
              id="exampleInputsubject1"
              aria-describedby="subjectHelp"
            />
            <small id="subjectHelp" className="form-text text-muted">
              What's the subject about?
            </small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" id="exampleTextarea"></textarea>
            <input
              value={message} onChange={(e) => setMessage(e.target.value)}
              type="message"
              className="form-control-file"
              id="messageHelp"
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Link className="d-inline p-2" to="/">Go Back</Link>
    </>
  );
};

interface ContactProps {}

export default Contact;
