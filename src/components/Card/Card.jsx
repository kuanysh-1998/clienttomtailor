import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>Новый Сезон</span>}
          <img src={item?.attributes?.img?.data?.attributes.url} alt="MainImg" className="mainImg" />
          <img src={item?.attributes?.img2?.data?.attributes.url} alt="SecondImg" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.oldPrice}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
