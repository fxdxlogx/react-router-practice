import React from "react";
import { useAuth } from "./authProvider";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  const handleClick = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <h2>Welcome {auth.user} </h2>
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
};
