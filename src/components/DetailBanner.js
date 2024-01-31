import React from "react";
import { Link } from "react-router-dom";

const DetailBanner = ({ movieDetail }) => {
  return (
    <div
      className="detail-banner"
      style={{
        backgroundImage:
          "url(" +
          "https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg" +
          ")",
      }}
    >
      <div className="detail-banner-info">
        <h1>NETFLIX</h1>
        <div className="detail-banner-box">
          <Link className="detail-banner-link" to="/main">
            HOME
          </Link>
          <div>|</div>
          <div className="detail-banner-title">{movieDetail.title}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
