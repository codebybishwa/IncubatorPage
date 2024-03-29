import React from 'react';
import PhotoCard from './PhotoCard';
import "./Mentors.css";
import photos from './Photos.json'; 

const Mentors = () => {
  return (
    <div className="wrapper mt-[2rem]"> 
      <h1 className="header text-[#DFA440] text-5xl">Our Mentors</h1>
      <div className="photo-gallery flex flex-wrap justify-center  mt-[2.5rem]">
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
