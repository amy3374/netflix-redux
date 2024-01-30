import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/movieAction";

const SortMovie = () => {
  const dispatch = useDispatch();
  const { sortedMovie } = useSelector((state) => state.movie);
  const sort = (e) => {
    let sortKeyword = e;
    dispatch(MovieAction.getSortedMovies(sortKeyword));
    console.log("sort컴포넌트", sortKeyword);
  };
  console.log("sort컴포넌트", sortedMovie);
  //   useEffect(() => {
  //     // if (sortKeyword !== "") {
  //     //   //   sort();
  //     // }
  //   }, []);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        SORT
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => sort("인기순")}>POPULAR</Dropdown.Item>
        <Dropdown.Item onClick={(e) => sort("현재 상영작")}>
          NOW PLAYING
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortMovie;
