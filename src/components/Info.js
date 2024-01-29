import React from "react";
import { MdGrade } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const Info = ({ item, name }) => {
  return (
    <div className={`info ${name}`}>
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
  );
};

export default Info;
