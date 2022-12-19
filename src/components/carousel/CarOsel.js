import React from "react";

const CarOsel = ({ slideImage, location, date }) => {
  return (
    <div className="snap-start h-full aspect-square overflow-hidden object-contain img-rel relative">
      <img
        src={slideImage}
        alt=""
        className={"aspect-auto h-full object-cover img-rel relative"}
        loading='lazy'
      />
      <div className="overlay">
        <h3>{location}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default CarOsel;
