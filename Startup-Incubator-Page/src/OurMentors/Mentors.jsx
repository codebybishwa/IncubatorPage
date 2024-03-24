// Mentors.js
import React from 'react';
import PhotoCard from './PhotoCard';
import "./Mentors.css";

const Mentors = ({ photos }) => {
  return (
    <div className="photo-gallery flex flex-wrap justify-center">
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Mentors;
