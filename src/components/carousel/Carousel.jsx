import "./Carousel.scss";

import { useState } from "react";

const Carousel = ({ item }) => {
  const [index, setIndex] = useState(0);

  const showNext = () => {
    let newIndex = index + 1;
    if (newIndex > item.pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const showPrevious = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = item.pictures.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <img className="carousel-image" src={item.pictures[index]} />
      {item.pictures.length > 1 && (
        <>
          <div className="carousel-counter">
            {index + 1}/{item.pictures.length}
          </div>
          <i
            className="fa-solid fa-chevron-left carousel-previous"
            onClick={showPrevious}
          ></i>
          <i
            className="fa-solid fa-chevron-right carousel-next"
            onClick={showNext}
          ></i>
        </>
      )}
    </div>
  );
};

export default Carousel;
