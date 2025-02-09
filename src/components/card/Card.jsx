import "./Card.scss";

import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <Link to={`/accommodation/${item.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${item.cover})`,
        }}
      >
        <h2>{item.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
