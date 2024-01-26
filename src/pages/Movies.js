import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MovieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import { Col, Container, Row } from "react-bootstrap";
import MoviePoster from "../components/MoviePoster";
// 경로 2 가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword로 검색해서 온 경우 => keyword와 관련된 영화들 보여주기
const Movies = () => {
  const dispatch = useDispatch();
  const { searchedMovies, popularMovies, loading } = useSelector(
    (state) => state.movie
  );
  const [query, setQuery] = useSearchParams();
  const getSearchedMovies = () => {
    let searchQuery = query.get("q");
    dispatch(MovieAction.getMovies(searchQuery));
  };
  console.log("검색gkwk", searchedMovies);
  useEffect(() => {
    getSearchedMovies();
  }, [query]);
  if (loading) {
    return (
      <ClipLoader
        color="#ffff"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {searchedMovies?.results.map((item, index) => (
              <Col key={index} lg={6} xs={12}>
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
