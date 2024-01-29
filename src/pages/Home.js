import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);
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
    <div>
      <Banner movie={popularMovies.results[0]} />
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
