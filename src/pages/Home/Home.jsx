import React from "react";
import "./home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="рекомендуемые" />
      <Categories />
      <FeaturedProducts type="популярные" />
      <Contact />
    </div>
  );
};

export default Home;
