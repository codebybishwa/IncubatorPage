import React from 'react';
import "./Mentors.css";
import "../Advisors/Advisors.css"

const PhotoCard = ({ photo }) => {
  return (
    <div className='photo-container'>
      <div className="photo-card">
        <img src={photo.imageUrl} alt={photo.name} className="photo-image"/>
      </div>
      <div className="text-container">
        <p className="name">{photo.name}</p>
        <p className="position">{photo.position}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
