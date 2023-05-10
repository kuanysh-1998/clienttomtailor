import React from "react";
import "./products.scss";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const [maxPrice, setMaxPrice] = React.useState(1000);
  const [sort, setSort] = React.useState(null);
  const [selectedSubCats, setSelectedSubCats] = React.useState([]);


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Категория</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>По цене</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Сортировать по:</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              value="asc"
              id="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">По возрастанию цены</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              name="price"
              value="desc"
              id="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">По убыванию цены</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className="catImg"
          src="https://tom-tailor.ru/local/frontend/build/images/required/subscribe.jpg"
          alt="image"
        />

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
