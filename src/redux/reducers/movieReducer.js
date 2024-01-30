let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  searchedMovies: {},
  movieDetail: {},
  movieReview: {},
  recommendations: {},
  movieVideo: {},
  sortedMovie: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        searchedMovies: payload.searchedMovies,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "GET_MOVIE_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        movieDetail: payload.movieDetail,
        movieReview: payload.movieReview,
        recommendations: payload.recommendations,
        genreList: payload.genreList,
        movieVideo: payload.movieVideo,
        loading: false,
      };
    case "GET_SORTED_MOVIE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_SORTED_MOVIE_SUCCESS":
      return {
        ...state,
        sortedMovie: payload.sortedMovie,
        loading: false,
      };
    case "GET_SORTED_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
