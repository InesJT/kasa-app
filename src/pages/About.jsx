import Banner from "../components/banner";
import Collapse from "../components/collapse";

import about from "../assets/images/banner-about.png";
import aboutData from "../db/about.json";

const About = () => {
  return (
    <main className="container">
      <Banner image={about} />
      {aboutData.map((element) => (
        <Collapse key={element.title} item={element} />
      ))}
    </main>
  );
};

export default About;
