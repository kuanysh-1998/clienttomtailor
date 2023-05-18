import React from "react";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "./../../assets/logoG.jpg";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/cartSlice";

const Contact = ({scrollRef, location}) => {
  const dispatch = useDispatch();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact" ref={scrollRef}>
      <div className="wrapper">
        <span>БУДЬТЕ НА СВЯЗИ С НАМИ:</span>
        <div className="gmail" onClick={handleGoogleLogin}>
          <div className="mail">
            <img src={logo} alt="logoGoogle" />
            <span>Войти через гугл</span>
          </div>
          <button>ПРИСОЕДИНЯЙТЕСЬ К НАМ</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
