import Banner from '/src/components/banner';
import Collapse from '/src/components/collapse';

import about from '/src/assets/images/banner-about.png';
import aboutData from '/src/db/about.json';

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
