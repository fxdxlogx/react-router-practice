import { Link, Outlet, Routes, Route } from "react-router-dom";
import TaylorImg1 from "./subPages/taylorImg1";

function Taylor() {
  return (
    <>
      <Outlet />

      <div>
        <Link to="taylor1">Taylor 1</Link>
        <br />
        <Link to="taylor2">Taylor 2</Link>
        <br />
        <Link to="/Taylor/taylor">Taylor music</Link>
        <br />
      </div>

      {/* <Routes>
        <Route index element={<TaylorImg1 />} />
      </Routes> */}
    </>
  );
}

export default Taylor;
