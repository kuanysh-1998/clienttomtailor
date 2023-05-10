import React from "react";
import "./slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const data = [
  "https://i.pinimg.com/originals/ce/89/9e/ce899e5864739765f035751bf55494fd.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://mykaleidoscope.ru/uploads/posts/2022-01/1643250951_11-mykaleidoscope-ru-p-stilnii-muzhchina-moda-12.jpg?auto=compress&cs=tinysrgb&w=1600",
  // "https://images.kinorium.com/movie/shot/669090/w1500_39644247.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/a80/a8020ee849c3c003fe3cc917089600e0/1920kh700_desktop_min.jpg"
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="sliderImage" />
        <img src={data[1]} alt="sliderImage" />
        <img src={data[2]} alt="sliderImage" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>

        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
