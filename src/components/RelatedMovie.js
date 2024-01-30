import React from "react";
import MovieCard from "./MovieCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const RelatedMovie = ({ recommendations }) => {
  return (
    <div className="related-area">
      <Container>
        <Row>
          {recommendations?.results.map((item) => (
            <Col className="related-movie" xs={6} lg={6} xl={4}>
              <MovieCard name="related" item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RelatedMovie;
