import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Info from "./Info";

const MovieCard = ({ name, item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      onClick={goToDetail}
      className={`movie-card ${name}`}
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="movie-card-overlay">
        <h1>{item.title}</h1>
        <div className="movie-card-title_bar"></div>
        <div className="movie-card-genre">
          {item.genre_ids.map((id) => (
            <Badge className="genre-badge" bg="danger">
              {genreList?.find((item) => item.id === id)?.name}
            </Badge>
          ))}
        </div>
        <Info name={"info-card"} item={item} />
      </div>
    </div>
  );
};

export default MovieCard;
