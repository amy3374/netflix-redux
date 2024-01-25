import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdGrade } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="movie-card"
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
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className="movie-card-info">
          <div className="average">
            <MdGrade className="average-logo" />
            {item.vote_average}
          </div>
          <div>
            <IoMdPeople className="popularity" />
            {item.popularity}
          </div>
          <div className="adult">{item.adult ? "19" : "Under18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
