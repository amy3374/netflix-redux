import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/movieAction";
import YouTube from "react-youtube";

const MovieModal = ({ modal, setModal, id }) => {
  const { movieVideo } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.getMovieDetail(id));
  }, []);
  console.log("video", movieVideo);
  return (
    <Modal
      size="xl"
      show={modal}
      onHide={() => setModal(false)}
      aria-labelledby="movie-modal"
    >
      <Modal.Header closeButton>
        {/* <Modal.Title>Modal heading</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={movieVideo?.results[0]?.key}
          opts={{
            width: "100%",
            height: "600",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
