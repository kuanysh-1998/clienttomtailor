import React from "react";
import "./favourites.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favourites = () => {
  const { favProducts } = useSelector((state) => state.favouritesSlice);


  return (
    <div className="cards" >
      {favProducts.map((item) => (
        <Link to={`/product/${item.id}`} className="link" key={item.id}>
          <div className="card">
            <div className="image">
              {item?.isNew && <span>Новый Сезон</span>}
              <FavoriteBorderIcon className="favourites" />
              <img src={item.img} alt="MainImg" className="mainImg" />
              <img src={item.img2} alt="SecondImg" className="secondImg" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
              <h3>${item?.oldPrice}</h3>
              <h3>${item?.price}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Favourites;
