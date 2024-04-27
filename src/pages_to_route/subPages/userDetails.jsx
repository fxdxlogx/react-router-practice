import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  return (
    <>
      <h2>Details of no. {userId} I mean of Taylor</h2>
    </>
  );
}
