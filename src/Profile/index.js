import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css"; // Import CSS file for styling

const Profile = () => {
  // Access the props passed from Login component
  const { state } = useLocation();
  const { info } = state;

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-info">
        <p className="profile-field">Email:</p>
        <p className="profile-value">{info.email}</p>
      </div>
      <div className="profile-info">
        <p className="profile-field">Password:</p>
        <p className="profile-value">{info.password}</p>
      </div>
    </div>
  );
};

export default Profile;
