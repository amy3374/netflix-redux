import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/movieAction";

const SortMovie = () => {
  const dispatch = useDispatch();
  const { sortedMovie } = useSelector((state) => state.movie);
  const sort = (e) => {
    let sortKeyword = e;
    console.log("sort컴포넌트", sortKeyword);
    dispatch(MovieAction.getSortedMovies(sortKeyword));
  };
  //   useEffect(() => {
  //     // if (sortKeyword !== "") {
  //     //   //   sort();
  //     // }
  //   }, [sortKeyword]);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        SORT
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => sort("인기순")}>POPULAR</Dropdown.Item>
        <Dropdown.Item onClick={() => sort("현재 상영작")}>
          NOW PLAYING
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortMovie;
