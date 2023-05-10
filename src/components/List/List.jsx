import React from "react";
import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, catId, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&${
      sort !== null ? `sort=price:${sort}` : ""
    } `
  );

  console.log(data);

  return (
    <div className="list">
      {error ? (
        <h2>Something went wrong!</h2>
      ) : loading ? (
        <h1>Loading..., please wait!</h1>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
