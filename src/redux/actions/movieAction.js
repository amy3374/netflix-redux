import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(searchQuery, page) {
  console.log("Action page");
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );
      let searchApi = ``;
      {
        searchQuery
          ? (searchApi = api.get(
              `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
            ))
          : (searchApi = popularMovieApi);
      }

      let [
        popularMovies,
        topRatedMovies,
        upComingMovies,
        genreList,
        searchedMovies,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
        searchApi,
      ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          searchedMovies: searchedMovies.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE__DETAIL_REQUEST" });
      const movieDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const movieReviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
      );
      const recommendationsApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );
      const movieModalApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en`
      );
      let [movieDetail, movieReview, recommendations, genreList, movieVideo] =
        await Promise.all([
          movieDetailApi,
          movieReviewApi,
          recommendationsApi,
          genreApi,
          movieModalApi,
        ]);
      console.log("modal", movieVideo);
      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetail: movieDetail.data,
          movieReview: movieReview.data,
          recommendations: recommendations.data,
          genreList: genreList.data.genres,
          movieVideo: movieVideo.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_DETAIL_FAILURE" });
    }
  };
}

function getSortedMovies(selected, page) {
  // console.log("action selected", selected);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SORTED_MOVIE_REQUEST" });
      let sortedApi = ``;

      {
        selected === "인기순"
          ? (sortedApi = api.get(
              `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
            ))
          : selected === "별점순"
          ? (sortedApi = api.get(
              `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
            ))
          : (sortedApi = api.get(
              `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
            ));
      }

      let [sortedMovie] = await Promise.all([sortedApi]);
      // console.log("action sort", selected, sortedMovie);
      dispatch({
        type: "GET_SORTED_MOVIE_SUCCESS",
        payload: { sortedMovie: sortedMovie.data },
      });
    } catch (error) {
      dispatch({ type: "GET_SORTED_MOVIE_FAILURE" });
    }
  };
}

export const MovieAction = {
  getMovies,
  getMovieDetail,
  getSortedMovies,
};
