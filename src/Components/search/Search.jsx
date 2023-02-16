import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Searchback from "@mui/icons-material/SettingsBackupRestoreTwoTone";
import InputSearch from "./InputSearch";
import { ActionCardArea } from "@mui/material";
import "./Search.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// me falta importar una imagen

const Search = () => {
  const { restaurants } = useSelector((store) => store.restaurants);
  const [foodAll, setFoodAll] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const foodTemp = restaurants.map((restaurants) => restaurants.menu);
    setFoodAll(foodTemp);
  }, [restaurants]);

  const handleCardFood = (name) => {
    navigate(`/fooddetails/${name}`);
  };
  return (
    <Container>
      <div className="search">
        <InputSearch foodAll={foodAll} setFilteredFood={setFilteredFood} />
        <div className="search__recent">
          <span className="search__recent_title">Recent Searchs</span>
        </div>
        <section className="search__container">
          {filteredFood.length ? (
            filteredFood.map((food, index) => (
              <ActionCardArea
                onClick={() => {
                  handleCardFood(food.name);
                }}
                key={index}
              >
                <aside className="search__card__content">
                  <img src={food.image} alt="" />
                  <div className="search__card__content">
                    <span> {food.name}</span>
                    <span>$ {food.price}</span>
                  </div>
                </aside>
              </ActionCardArea>
            ))
          ) : (
            <img
              className="search_notFound"
              src={notFoundLogo}
              alt="Not Found Logo"
            />
          )}
        </section>
      </div>
    </Container>
  );
};
export default Search;
