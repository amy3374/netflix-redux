import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(searchQuery) {
  console.log("Searchquery", searchQuery);

  return async (dispatch, getState) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en'`
      );
      let searchApi = ``;
      {
        searchQuery
          ? (searchApi = api.get(
              `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
            ))
          : (searchApi = popularMovieApi);
      }

      let [
        popularMovies,
        topRatedMovies,
        upComingMovies,
        genreList,
        searchedMovies,
        // movieDetail,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
        searchApi,
        // movieDetailApi,
      ]);
      // console.log("detail", movieDetail);
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
      const movieDetail = await api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetail: movieDetail.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_DETAIL_FAILURE" });
    }
  };
}

export const MovieAction = {
  getMovies,
  getMovieDetail,
};
