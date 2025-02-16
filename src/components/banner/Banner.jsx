import './Banner.scss';

const Banner = ({ image, text }) => {
  return (
    <section className="banner bg" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-text">{text && <h1>{text}</h1>}</div>
    </section>
  );
};

export default Banner;
