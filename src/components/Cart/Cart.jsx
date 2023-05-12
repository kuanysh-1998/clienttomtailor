import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartSlice";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cartSlice);

  const totalSum = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51N5Y8MFKPxq990yNXuLuYRgtcJu2w0NVCHudnO78RO4QXAxFqaXvyMuZUUr5BBdw3a48JvSWr1S2mQ7dQWo64HEf00V4MsuwQI"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Товар в корзине</h1>

      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="image" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.description.substring(0, 100)}</p>
            <div className="price">
              {item.quantity}x${item.price}
            </div>
          </div>

          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}

      <div className="total">
        <span>ИТОГОВАЯ СУММА</span>
        <span>${totalSum()}</span>
      </div>
      <button onClick={handlePayment}>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Удалить Товары
      </span>
    </div>
  );
};

export default Cart;
