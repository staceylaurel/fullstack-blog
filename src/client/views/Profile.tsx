import * as React from "react";
import api from "../utils/api-service";
import { Link } from "react-router-dom";

const Profile: React.FC<ProfileProps> = () => {
  
  const [profile, setProfile] = React.useState<any>(null);

  React.useEffect(() => {
    api("/api/profile").then((profile) => setProfile(profile));
  }, []);

  return (
    <>
      <h1>Welcome back, {profile?.name}!</h1>

  
      <Link className="d-inline p-2" to="/">Go Back</Link>
</>



    
  );
};

interface ProfileProps{

}

export default Profile;