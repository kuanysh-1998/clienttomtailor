import React from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const id = useParams().id;
  console.log(id);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img")}
          />
          <img
            src={
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              selectedImg !== ""
                ? data?.attributes[selectedImg]?.data?.attributes?.url
                : data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>

      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                description: data.attributes.description,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon /> ДОБАВИТЬ В КОРЗИНУ
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ДОБАВИТЬ В ИЗБРАННОЕ
          </div>

          <div className="item">
            <BalanceIcon /> ДОБАВИТЬ К СРАВНЕНИЮ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
