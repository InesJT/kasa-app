import Banner from "../components/banner";
import Card from "../components/card";

import bgImage from "../assets/images/banner-home.png";

const Home = () => {
  return (
    <main className="container">
      <Banner image={bgImage} text="Chez vous, partout et ailleurs" />
      <Card />
    </main>
  );
};

export default Home;
