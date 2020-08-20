import * as React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register: React.FC<RegisterProps> = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    history.push("/profile");
  };

  return (
    <>
      <div>
        <h1>Compose</h1>
        <form>
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
            <label>Email address</label>
            <input
              value={email} onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              value={password} onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Link to="/">Go Back</Link>
    </>
  );
};

interface RegisterProps {}

export default Register;
