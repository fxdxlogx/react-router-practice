import "./components.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../pages_to_route/login_logout/authProvider";

const auth = useAuth();

const ColorfulBox = () => {
  function NavLinkStyles(args) {
    let active = args.isActive;

    return {
      fontWeight: active ? "bolder" : "normal",
      color: active ? "lime" : "black",
    };
  }

  return (
    <div className="colorful-box">
      <NavLink to="Taylor" style={NavLinkStyles}>
        Taylor
      </NavLink>
      <br />
      <NavLink to="/" style={NavLinkStyles}>
        Home
      </NavLink>
      <br />
      <NavLink to="order_guy">Order Guy</NavLink>
      <br />
      <NavLink to="users">Users</NavLink>
      <br />
      {!auth.login && <NavLink to="login">Login</NavLink>}
      <br />
      {auth.login && <NavLink to="profile">Profile</NavLink>}
    </div>
  );
};

export default ColorfulBox;
