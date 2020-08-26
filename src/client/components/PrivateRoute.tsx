import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest}) => {
  const [checking, setChecking] = React.useState<boolean>(true);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      setChecking(false);
    }else {
      fetch('/auth/tokne/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => {
        if (res.ok){
          setLoggedIn(true);
          setChecking(false);
        }else {
          setChecking(false);
        }
      })
    }
  }, []);

    if (checking) {
      return <h1 className="text-center display-1 text-danger"> Loading... </h1>
    }

if (loggedIn) {
  return <Route {...rest}>{children}</Route>
} else {
  return <Redirect to="/login" />
}
};

interface PrivateRouteProps{
 exact? : boolean,
 path: string
}

export default PrivateRoute;