import React from "react";
import "./home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import { useLocation } from "react-router-dom";

const Home = () => {
  const scrollRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (location.hash === "#contact") {
      handleScroll();
    }
  }, [location]);

  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="рекомендуемые" />
      <Categories />
      <FeaturedProducts type="популярные" />
      <Contact scrollRef={scrollRef} location={location} />
    </div>
  );
};

export default Home;
