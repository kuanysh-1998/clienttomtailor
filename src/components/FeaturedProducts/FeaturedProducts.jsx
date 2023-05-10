import React from "react";
import "./featuredproducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} товары</h1>
        <p>
          Одежда Tom Tailor — это возможность создать любой образ: для работы,
          отдыха дома, занятий спортом, прогулок с друзьями, выездов на природу.
          Удобные, актуальные, стильные и функциональные вещи в нашем каталоге
          представлены в регулярно обновляющихся коллекциях. Выбирайте предметы
          гардероба, которые наиболее соответствуют образу жизни и
          предпочтениям.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "Something went wrong"
        ) : loading ? (
          <h2>Loading....</h2>
        ) : (
          data.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
