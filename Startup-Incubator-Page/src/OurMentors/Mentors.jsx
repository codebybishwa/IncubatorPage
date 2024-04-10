import React, { useState, useEffect } from 'react';
import './Mentors.css';

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('https://api.nextedge.health/api/v1/incubator/mentor-advisor');
        if (!response.ok) {
          throw new Error('Failed to fetch mentors');
        }
        const data = await response.json();
        // Filter mentors with type 'mentor'
        const filteredMentors = data.filter(mentor => mentor.type === 'mentor');
        setMentors(filteredMentors);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);

  // Function to chunk mentors into arrays of 5 mentors each
  const chunkMentors = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="wrapper mt-8 flex flex-col items-center">
      <h1 className="header text-[#DFA440] text-4xl lg:text-5xl text-center">Our Mentors</h1>
      <div className="photo-gallery mt-8 flex flex-wrap justify-center max-w-[80%]">
        {/* Render mentors in chunks of 5 per row */}
        {chunkMentors(mentors, 5).map((mentorChunk, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center w-full">
            {mentorChunk.map((mentor, index) => (
              <div key={index} className="flex-shrink-0 sm:w-full w-1/2 md:w-1/3 lg:w-1/5 p-2">
                <div className="flex flex-col items-center mb-4">
                  <div className="rounded-full border-4 border-[#DFA440] overflow-hidden mb-2">
                    <img src={mentor.image} alt={mentor.name} className="w-40 h-40 object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold mb-2">{mentor.name}</p>
                    <p className="text-base text-gray-700">{mentor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
