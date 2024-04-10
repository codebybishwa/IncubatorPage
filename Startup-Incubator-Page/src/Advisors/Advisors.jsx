import React, { useState, useEffect } from 'react';
import './Advisors.css';

const Advisors = () => {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const response = await fetch('https://api.nextedge.health/api/v1/incubator/mentor-advisor');
        if (!response.ok) {
          throw new Error('Failed to fetch advisors');
        }
        const data = await response.json();
        // Filter advisors with type 'advisor'
        const filteredAdvisors = data.filter(advisor => advisor.type === 'advisor');
        setAdvisors(filteredAdvisors);
      } catch (error) {
        console.error('Error fetching advisors:', error);
      }
    };

    fetchAdvisors();
  }, []);

  // Function to chunk advisors into arrays of 5 advisors each
  const chunkAdvisors = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="wrapper mt-[2rem] flex flex-col items-center">
      <h1 className="header text-[#DFA440] text-5xl text-center">Our Advisors</h1>
      <div className="photo-gallery mt-[2.5rem] flex flex-wrap justify-center max-w-[80%]">
        {/* Render advisors in chunks of 5 per row */}
        {chunkAdvisors(advisors, 5).map((advisorChunk, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center w-full">
            {advisorChunk.map((advisor, index) => (
              <div key={index} className="flex-shrink-0 sm:w-full w-1/2 md:w-1/3 lg:w-1/5 p-2">
                <div className="flex flex-col items-center mb-4">
                  <div className="rounded-full border-4 border-[#DFA440] overflow-hidden mb-2">
                    <img src={advisor.image} alt={advisor.name} className="w-40 h-40 object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold mb-2">{advisor.name}</p>
                    <p className="text-base text-gray-700">{advisor.description}</p>
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

export default Advisors;
