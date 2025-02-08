import Banner from "../components/banner";
import Card from "../components/card";

import "./Home.scss";

import accommodations from "../db/logements.json";

import bgImage from "../assets/images/banner-home.png";

const Home = () => {
  return (
    <main className="container">
      <Banner image={bgImage} text="Chez vous, partout et ailleurs" />
      <section className="accommodations">
        {accommodations.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default Home;
