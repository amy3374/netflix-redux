import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Info from "./Info";

const MoviePoster = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      onClick={goToDetail}
      className="movie-poster"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="movie-poster-info">
        <div className="movie-poster-header">
          <img
            width={50}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
          <div className="movie-poster-header-info">
            <h1>{item.title}</h1>
            <span>{item.release_date}</span>
          </div>
        </div>
        <div className="movie-poster-genre">
          {item.genre_ids.map((id, index) => (
            <Badge key={index} className="genre-badge" bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <p className="poster-overview">{item.overview}</p>
        <Info name={"info-poster"} item={item} />
      </div>
    </div>
  );
};

export default MoviePoster;
