import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import DetailBanner from "../components/DetailBanner";
import Info from "../components/Info";
import Review from "../components/Review";
import RelatedMovie from "../components/RelatedMovie";
import MovieModal from "../components/MovieModal";
import { MdMovie } from "react-icons/md";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const [isReview, setIsReview] = useState(true);
  const [isRelated, setIsRelated] = useState(false);
  const [modal, setModal] = useState(false);
  const { movieDetail, loading, movieReview, recommendations } = useSelector(
    (state) => state.movie
  );
  let { id } = useParams();
  const toggle = () => {
    setIsReview(!isReview);
    setIsRelated(!isRelated);
  };
  useEffect(() => {
    dispatch(MovieAction.getMovieDetail(id));
  }, []);
  if (loading) {
    return (
      <Container className="loading-area">
        <ClipLoader color="red" loading={loading} size={150} />
      </Container>
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
              {movieDetail?.genres?.map((genre) => (
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
                  Budget
                </Badge>
                ${movieDetail.budget}
              </li>
              <li>
                <Badge className="badge" bg="danger">
                  Revenue
                </Badge>
                ${movieDetail.revenue}
              </li>
              <li>
                <Badge className="badge" bg="danger">
                  Release_Day
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
            <div onClick={() => setModal(true)} className="movie-trailer">
              <MdMovie className="movie-icon" />
              Watch Trailer
            </div>
            {modal && <MovieModal id={id} setModal={setModal} modal={modal} />}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} lg={12} xl={12}>
            <div style={{ paddingLeft: "25px" }}>
              <button
                className={`${isReview ? "clicked-btn" : "toggle-btn"}`}
                onClick={toggle}
              >
                REVIEWS ( {movieReview?.results?.length} )
              </button>
              <button
                onClick={toggle}
                className={`${isRelated ? "clicked-btn" : "toggle-btn"}`}
              >
                RELATED MOVIES ( {recommendations?.results?.length} )
              </button>
            </div>
            {isReview ? (
              <Review reviews={movieReview} />
            ) : (
              <RelatedMovie recommendations={recommendations} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
