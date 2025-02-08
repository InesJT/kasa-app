import "./Banner.scss";

const Banner = ({ image, text }) => {
  return (
    <section className="banner bg" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1>{text}</h1>}
    </section>
  );
};

export default Banner;
