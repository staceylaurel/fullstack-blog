import * as React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../utils/api-service";

const Contact: React.FC<ContactProps> = (props) => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api("/api/contact", "POST", { email, subject, body });
    setEmail("");
    setSubject("");
    setBody("");
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center p-2">Contact</h1>
        <form className="form-group border border-primary rounded shadow-lg p-3">
          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="name"
              className="form-control"
              id="exampleInputname1"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="subject"
              className="form-control"
              id="exampleInputsubject1"
              aria-describedby="subjectHelp"
            />
            <small id="subjectHelp" className="form-text text-muted">
            </small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>

      <Link className="d-inline p-2" to="/">
        Go Back
      </Link>
    </>
  );
};

interface ContactProps {}

export default Contact;
