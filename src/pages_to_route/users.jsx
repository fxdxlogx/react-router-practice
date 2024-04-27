import { Outlet, useSearchParams, Link, useNavigate } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  return (
    <>
      <h2 onClick={() => setSearchParams({ filter: "active", name: "Taylor" })}>
        Active users
      </h2>
      <h2 onClick={() => setSearchParams({})}>Deactive Users</h2>
      {searchParams.get("filter") === "active" && (
        <Link to="1">Active User Details</Link>
      )}
      <Outlet />
    </>
  );
}
