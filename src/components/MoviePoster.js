import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdGrade } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const MoviePoster = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
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
          {item.genre_ids.map((id) => (
            <Badge className="genre-badge" bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <p className="poster-overview">{item.overview}</p>
        <div className="movie-poster-info_info">
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

export default MoviePoster;
