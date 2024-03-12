import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { Container } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("home", popularMovies);
  console.log("home loading", loading);

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);
  if (loading) {
    return (
      <Container className="loading-area">
        <ClipLoader
          color="red"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Container>
    );
  }
  return (
    <div>
      <Banner movie={popularMovies?.results[0]} />
      <Container>
        <h1 className="movie-type">Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1 className="movie-type">Top Rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1 className="movie-type">Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </Container>
    </div>
  );
};

export default Home;
