import { Routes, Route, NavLink, useNavigate, Outlet } from "react-router-dom";

export default function OrderGuy() {
  let navigate = useNavigate();
  return (
    <div className="order_guy">
      <h1>
        {/* <NavLink to="/delivery_confirmed">Confirm the order!!</NavLink> */}

        <button
          onClick={() => navigate("delivery_confirmed")}
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            border: "none",
            background: "lightblue",
            cursor: "pointer",
          }}
        >
          Confirm the order!!
        </button>
      </h1>

      <Outlet />
    </div>
  );
}
