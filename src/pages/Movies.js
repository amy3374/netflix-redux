import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MovieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import { Col, Container, Row } from "react-bootstrap";
import MoviePoster from "../components/MoviePoster";
import SortMovie from "../components/SortMovie";

// 경로 2 가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword로 검색해서 온 경우 => keyword와 관련된 영화들 보여주기
const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const { searchedMovies, loading, sortedMovie } = useSelector(
    (state) => state.movie
  );
  console.log("무비페이지 sort selected", selected);

  const getSearchedMovies = () => {
    let searchQuery = query.get("q");
    dispatch(MovieAction.getMovies(searchQuery));
  };
  const sort = () => {
    console.log("sort함수 selected", selected);
    dispatch(MovieAction.getSortedMovies(selected));
  };
  useEffect(() => {
    if (selected) {
      console.log("sort api");
      sort();
    } else {
      console.log("원래api");
      getSearchedMovies();
    }
  }, [query, selected]);

  if (loading) {
    return (
      <Container className="loading-area">
        <ClipLoader color="red" loading={loading} size={150} />
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col className="mt-3 mb-3">
          <SortMovie selected={selected} setSelected={setSelected} />
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <Row>
            {selected
              ? sortedMovie?.results?.map((item, index) => (
                  <Col className="mb-5" key={index} xl={4} lg={6} xs={12}>
                    <MoviePoster item={item} />
                  </Col>
                ))
              : !selected &&
                searchedMovies?.results?.map((item, index) => (
                  <Col className="mb-5" key={index} xl={4} lg={6} xs={12}>
                    <MoviePoster item={item} />
                  </Col>
                ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
