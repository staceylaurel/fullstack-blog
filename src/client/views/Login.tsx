import * as React from "react";
import { useHistory, Link } from "react-router-dom";
import api from '../utils/api-service';
import { useLocation } from 'react-router-dom'

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { state } = useLocation<{ msg: string }>();

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = await api("/auth/login", "POST", { email, password});
    localStorage.setItem('token', token);
    history.push("/profile");
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center">Login</h1>
        <form className="form-group border border-primary rounded shadow-lg p-3">
          <div>
            
            <label>Email address</label>
            <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              type="email"
              className="form-control p-1 mb-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>

      <Link to="/">Go Back</Link>

      {/* // {state?.msg && <div className="" {}} */}
    </>
  );
};

interface LoginProps {}

export default Login;
