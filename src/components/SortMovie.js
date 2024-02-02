import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/movieAction";

const SortMovie = ({ selected, setSelected }) => {
  const dispatch = useDispatch();
  const { sortedMovie } = useSelector((state) => state.movie);
  const selectList = ["인기순", "별점순", "현재상영작"];

  console.log("sort컴포넌트2", selected, sortedMovie);
  return (
    <div>
      <select
        className="select-box"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        {selectList.map((item) => (
          <option className="select-option" key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortMovie;
