import * as React from "react";
import api from "../utils/api-service";

const Profile: React.FC<ProfileProps> = () => {
  
  const [profile, setProfile] = React.useState<any>(null);

  React.useEffect(() => {
    api("/api/profile").then((profile) => setProfile(profile));
  }, []);

  return (
    <>
      <h1>Welcome back, {profile?.name}!</h1>
    </>
  );
};

interface ProfileProps{

}

export default Profile;