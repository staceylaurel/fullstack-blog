import * as React from "react";
import { useHistory, Link } from "react-router-dom";
import { json, SetAccessToken, User } from '../utils/API';
import { RouteComponentProps} from "react-router-dom";
import e from "express";

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    history.push("/profile");
  };


  // componentDidMount() {
  //   if (User && User.role === 'admin') {
  //     this.props.history.replace('/admin')
  //   }
  // }
  // private alert: JSX.Element = null;
  // private logginIn: boolean = false

  // componentDidMount() {
  //   if(User && User.role === 'admin') {
  //     this.props.history.push('/admin');
  //   }
  // }
  // async handleLoginSubmit(e: React.FormEment<HTMLFormElement) {

  // e.preventDefault();

  //this.setState({ loginStatus: false});
  // if(this.logginIn) return;
  // 
  // try{
    // this.logginIn = true;
  //   let result = await json('/auth/login', 'POST', {
  //     email: this.state.email, 
  //     password: this.state.password
  //   })
  //   if(result) {
  //     SetAccessToken(result.token, { userid: result.userid, role: result.role}); 
  //     if(result.role == 'admin'){
  //       this.props.history.push('/admin');
  //   } else {
  //     this.props.history('/');
  //   }
  //   }else {
  //  this.setState({ loginStatus: true });
  //   }
  //   } catch(e) {
    // this.setState({ loginStatus: true });
  //     throw e;
  //   }
  // } finally {
    // this.logginIn = false;
  // }
  // }

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center">Login</h1>
        <form className="form-group border border-primary rounded shadow-lg p-3" onSubmit={(e) => this.handleLoginSubmit(e)}>
          <div>
            
            <label>Email address</label>
            <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState ({email: e.target.value})}
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
            <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState ({password: e.target.value})}
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
    </>
  );
};

interface LoginProps {}

export default Login;
