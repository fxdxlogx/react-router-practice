import React from "react";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages_to_route/home";
import ColorfulBox from "./components/colorful_box";
import Taylor from "./pages_to_route/taylor";
import OrderGuy from "./components/orderGuy";
import TaylorImg1 from "./pages_to_route/subPages/taylorImg1";
import TaylorImg2 from "./pages_to_route/subPages/taylorImg2";
import DeliveryComplete from "./pages_to_route/delivery_confirmed";
// import TaylorMusic from "./pages_to_route/subPages/taylorMusic";
import Users from "./pages_to_route/users";
import UserDetails from "./pages_to_route/subPages/userDetails";

const TaylorMusic = React.lazy(
  () => import("./pages_to_route/subPages/taylorMusic"),
);

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="*" element={<>Wabepage not found.</>}></Route>

        <Route path="/" element={<Home />} />

        <Route path="order_guy" element={<OrderGuy />}>
          <Route
            path="delivery_confirmed"
            element={<DeliveryComplete name="Mr. sweet" />}
          />
        </Route>

        <Route path="Taylor" element={<Taylor />}>
          <Route
            path=":musicId"
            element={
              <React.Suspense fallback="loading...">
                <TaylorMusic />
              </React.Suspense>
            }
          />
          <Route index element={<TaylorImg1 />} />
          <Route path="taylor1" element={<TaylorImg1 />} />
          <Route path="taylor2" element={<TaylorImg2 />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />"
        </Route>
      </Routes>

      <ColorfulBox></ColorfulBox>
    </main>
  );
}
