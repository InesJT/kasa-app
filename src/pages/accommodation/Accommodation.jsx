import "./Accommodation.scss";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Carousel from "/src/components/carousel";
import Collapse from "/src/components/collapse";

import Rating from "/src/components/rating";

import accommodations from "/src/db/accommodations.json";

const Accommodation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedAccommodation = accommodations.find(
      (accommodation) => accommodation.id === id
    );
    setLoading(false);
    if (selectedAccommodation) {
      setItem(selectedAccommodation);
    } else {
      navigate("/error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <main className="container">
      <Carousel item={item} />
      <div className="accommodation-info">
        <div>
          <h1 className="accommodation-title">{item.title}</h1>
          <p className="accommodation-location">{item.location}</p>
          <div className="tags-container">
            {item.tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="host-rating-container">
          <div className="host-container">
            <div className="host-name">
              <div>{item.host.name.split(" ")[0]}</div>
              <div>{item.host.name.split(" ")[1]}</div>
            </div>
            <img className="host-picture" src={item.host.picture} />
          </div>
          <div className="rating-container">
            <Rating rating={item.rating} />
          </div>
        </div>
      </div>
      <div className="collapse-container">
        <div className="accommodation-collapse">
          <Collapse
            item={{ title: "Description", content: item.description }}
          />
        </div>
        <div className="accommodation-collapse">
          <Collapse item={{ title: "Équipements", content: item.equipments }} />
        </div>
      </div>
    </main>
  );
};

export default Accommodation;
