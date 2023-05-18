import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openCart, setOpenCart] = React.useState(false);
  const { products } = useSelector((state) => state.cartSlice);
  const { favProducts } = useSelector((state) => state.favouritesSlice);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar__left">
          <div className="item">
            <Link to="/products/2" className="link">
              Женщинам
            </Link>
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Мужчинам
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Детям
            </Link>
          </div>
        </div>

        <div className="navbar__center">
          <Link to="/">
            <img
              src="https://tom-tailor.ru/local/frontend/build/images/required/logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="navbar__right">
          <div className="item">
            <Link className="link" to="/about">
              О компании
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to={{
                pathname: "/",
                hash: "#contact",
              }}
            >
              Связаться с нами
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <Link to="/favourites" className="favourites">
              <FavoriteBorderOutlinedIcon />
              <span>{favProducts.length}</span>
            </Link>
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>

            <MenuIcon className="hamburger" />
          </div>
        </div>
      </div>

      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
