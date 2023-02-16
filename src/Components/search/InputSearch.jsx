import React from "react";
import { InputAdorment } from "@mui/material";
import {
  IconStyledSearch,
  InputSearchStyle,
} from "../ComponentsStyle/MaterialComponents";

const InputSearch = ({ foodAll, setFilteredFood }) => {
  const handleChange = ({ target }) => {
    let foodTemp = [];
    foodAll.forEach((e) => {
      e.map((food) => (foodAll = [...foodTemp, food]));
    });
    const filter = foodTemp.filter((food) =>
      food.name.toLowerCase().includes(target.value.toLowerCase())
    );
    if (filter.length === foodTemp.length) {
      setFilteredFood([]);
    } else {
      setFilteredFood(filter);
    }
  };


  return (
    <InputSearchStyle
    onChange={(target)=> {handleChange(target)}}
    fullWidth
    id="filled-search"
    placeholder="Search"
    type="search"
    InputProps={{
        startAdornment:(
            <InputAdorment position ="start">
                <IconStyledSearch/>
            </InputAdorment>
            
        )
    }}
    />
  )
};

export default InputSearch;
