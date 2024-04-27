import { useAuth } from "./authProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navigate = useNavigate();

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();

  const handleClick = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };
  <>
    <label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
    </label>

    <button onClick={handleClick}>Log in</button>
  </>;
};
