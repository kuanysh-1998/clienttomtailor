import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../../redux/favouritesSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>Новый Сезон</span>}
          <FavoriteBorderIcon
            className="favourites"
            onClick={() =>
              dispatch(
                addToFavourites({
                  id: item.id,
                  title: item.attributes.title,
                  description: item.attributes.description,
                  price: item.attributes.price,
                  img: item.attributes.img.data.attributes.url,
                  img2: item.attributes.img2.data.attributes.url,
                })
              )
            }
          />
          <img
            src={item?.attributes?.img?.data?.attributes.url}
            alt="MainImg"
            className="mainImg"
          />
          <img
            src={item?.attributes?.img2?.data?.attributes.url}
            alt="SecondImg"
            className="secondImg"
          />
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
