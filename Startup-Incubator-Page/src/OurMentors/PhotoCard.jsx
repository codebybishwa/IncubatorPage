// PhotoCard.js
import React from 'react';
import "./Mentors.css";

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card m-10">
      <img src={photo.imageUrl} alt={photo.name} />
      <p>{photo.name}</p>
      <p>{photo.position}</p>
    </div>
  );
};

export default PhotoCard;
