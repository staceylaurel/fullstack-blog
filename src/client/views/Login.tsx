import * as React from "react";
import { useHistory, Link } from "react-router-dom";

const Login: React.FC<LoginProps> = (props) => {
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
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
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
            <input value={password} onChange={(e) => setPassword(e.target.value)}
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

interface LoginProps {}

export default Login;
