import "./Rating.scss";

import { useEffect, useState } from "react";

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        starsArray.push("active");
      } else {
        starsArray.push("inactive");
      }
    }
    setStars(starsArray);
  }, [rating]);

  return (
    <div>
      {stars.map((star, index) =>
        star === "active" ? (
          <i key={index} className="fa-solid fa-star full"></i>
        ) : (
          <i key={index} className="fa-solid fa-star empty"></i>
        )
      )}
    </div>
  );
};

export default Rating;
