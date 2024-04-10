import React, { useState, useEffect } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nextedge.health/api/v1/incubator/aboutUs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutData(data.data); // Assuming 'data' is the key containing the desired object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white py-4 px-4">
      <h1 className="text-yellow-500 text-center text-5xl font-bold mb-8">About Us</h1>
      <div className="bg-blue-50 my-3 py-8 px-4 flex flex-col items-center">
        {/* Top Heading within the Blue Div */}
        <h3 className="text-2xl text-center font-bold mb-4">
          WELCOME TO INDIA'S FIRST AND FOREMOST ENTREPRENEURIAL <br />ECOSYSTEM FOCUSED ON HEALTHCARE
        </h3>
        {/* Render About Data if Available */}
        {aboutData && (
          <div className="md:w-full flex flex-col md:flex-row items-center">
            {/* Left column for image */}
            <div className="md:w-1/3">
              <img
                src={aboutData.image}
                alt={aboutData.heading}
                className="mx-auto rounded-lg shadow-lg"
                style={{ maxWidth: "300px" }}
              />
            </div>
            {/* Right column for heading and description */}
            <div className="md:w-2/3 md:text-center px-4 mt-4 md:mt-0">
              <h3 className="text-2xl font-bold mb-4">{aboutData.heading}</h3>
              <p className="text-lg leading-7">{aboutData.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
