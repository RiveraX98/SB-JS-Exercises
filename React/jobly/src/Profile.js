import React, { useContext } from "react";
import { ProfileCard } from "./ProfileCard";
import { UserContext } from "./UserContext";

export const Profile = () => {
  const user = useContext(UserContext);
  console.log("PFCARD:", user);
  return (
    <div className="mt-5">
      <div className="col-lg-4 offset-lg-4">
        <h3 className="title">Profile</h3>
        <ProfileCard user={user} />
      </div>
    </div>
  );
};
