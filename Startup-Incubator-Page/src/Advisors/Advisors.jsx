import React from 'react';
import PhotoCard from '../OurMentors/PhotoCard';
import "./Advisors.css";
import photos from './Advisors.json'; 

const Advisors = () => {
  return (
    <div className="wrapper mt-[2rem]"> 
      <h1 className="header text-[#DFA440] text-5xl">Our Advisors</h1>
      <div className="photo-gallery flex flex-wrap justify-center mt-[2.5rem]">
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Advisors;
