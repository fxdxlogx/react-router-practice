import { useNavigate } from "react-router-dom";

let styles = {
  color: "aqua",
  fontSize: "2rem",
  padding: "1rem",
  background: "rgba(225,225,225,1.2)",
};

export default function DeliveryComplete(props) {
  let navigate = useNavigate();

  return (
    <div style={styles}>
      <h1>Delivery Complete</h1>
      <h3>Thank you for your order {props.name}</h3>

      <button onClick={() => navigate(-1)}>
        I forgot to add some items in the chart
      </button>
    </div>
  );
}
