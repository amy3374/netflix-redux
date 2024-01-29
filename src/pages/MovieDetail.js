import React, { useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import DetailBanner from "../components/DetailBanner";
import Info from "../components/Info";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieDetail, loading } = useSelector((state) => state.movie);
  console.log("moviedetail", movieDetail);
  let { id } = useParams();
  console.log("디테일 id", id);
  useEffect(() => {
    dispatch(MovieAction.getMovieDetail(id));
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
    <div className="movie-detail">
      <DetailBanner movieDetail={movieDetail} />
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <div
              className="detail-poster"
              style={{
                backgroundImage:
                  "url(" +
                  `https://image.tmdb.org/t/p/original${movieDetail.poster_path}` +
                  ")",
              }}
            ></div>
          </Col>
          <Col className="detail-info" lg={7} xs={12}>
            <div className="detail-genre">
              {movieDetail.genres.map((genre) => (
                <Badge className="genre-badge" bg="danger">
                  {genre.name}
                </Badge>
              ))}
            </div>
            <h1 className="detail-title">{movieDetail.title}</h1>
            <h3 className="detail-tagline">{movieDetail.tagline}</h3>
            <Info name={"info-detail"} item={movieDetail} />
            <div className="detail-bar"></div>
            <p className="detail-overview">{movieDetail.overview}</p>
            <div className="detail-bar"></div>
            <ul className="detail-info_info">
              <li>
                <Badge className="badge" bg="danger">
                  Buget
                </Badge>
                {movieDetail.budget}
              </li>
              <li>
                <Badge className="badge" bg="danger">
                  Revenue
                </Badge>
                {movieDetail.revenue}
              </li>
              <li>
                <Badge className="badge" bg="danger">
                  Realease_Day
                </Badge>
                {movieDetail.release_date}
              </li>
              <li>
                <Badge className="badge" bg="danger">
                  Time
                </Badge>
                {movieDetail.runtime}
              </li>
            </ul>
            <div className="detail-bar"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
