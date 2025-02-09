import "./Home.scss";

import Banner from "/src/components/banner";
import Card from "/src/components/card";

import accommodations from "/src/db/accommodations.json";
import bgImage from "/src/assets/images/banner-home.png";

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
