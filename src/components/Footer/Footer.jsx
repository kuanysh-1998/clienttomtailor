import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="item">
          <h1>Категории</h1>
          <span>Женщинам</span>
          <span>Мужчинам</span>
          <span>Детям</span>
          <span>Новинки</span>
          <span>Лимитирванная коллекция</span>
        </div>
        <div className="item">
          <h1>Ссылки</h1>
          <span>FAQ</span>
          <span>Связаться с нами</span>
          <span>Магазины</span>
        </div>
        <div className="item">
          <h1>О компании</h1>
          <span>
            Мы — бренд повседневной одежды созданный, выросший и расположенный в
            Гамбурге. Наша суть — одежда для повседневной жизни. Для нас это не
            просто дресс-код, это глубоко укоренившийся образ мышления. Подход к
            бизнесу и жизни. Мы прошли долгий путь с 1962 года, когда была
            создана наша первая одежда. Но концепция Уве Шредера о современном
            образе и продукции высокого качества ведет нас по сей день.
          </span>
        </div>
        <div className="item">
          <h1>Контакты</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="left">
          <Link to="/">
            <img
              src="https://tom-tailor.ru/local/frontend/build/images/required/logo.svg"
              alt="logo"
            />
          </Link>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
