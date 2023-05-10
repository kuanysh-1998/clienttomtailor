import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/a1d/a1d5d3e3c76eb8921ca52a3f80653066/1034102_29999_1.jpg"
            alt="Image"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/547/5470aaee76814f1cca25e6e4f3819527/1034120_31032_1.jpg"
            alt="Image"
          />
          <button>
            <Link className="link" to="/products/1">
              Женщинам
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/03e/03e8e97fcc97b81149b54a286b43aefc/1034866_27475_3.jpg"
            alt="Image"
          />
          <button>
            <Link className="link" to="/products/1">
              Мужчинам
            </Link>
          </button>
        </div>
      </div>
      <div className="col col__large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/ce5/ce56aed84953caed38aac42f37068348/1036327_31045_2.jpg"
                alt="Image"
              />
              <button>
                <Link className="link" to="/products/1">
                  Новинки
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/998/99808452d7ee0e348854fdd15e711142/1035235_10668_5.jpg"
                alt="Image"
              />
              <button>
                <Link className="link" to="/products/1">
                  Лимитированная коллекция
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://upload-96d5e9c2a2fefe65127343db553761dc.storage.yandexcloud.net/iblock/506/506e0ca2887e6642eeaf00b78d29d4d3/1920kh700_desktop_min-_1_.jpg"
            alt="Image"
          />
          <button>
            <Link className="link" to="/products/1">
              Детям
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
