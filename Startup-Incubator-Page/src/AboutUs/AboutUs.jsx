import React from "react";
import Photo from "../assets/AboutUs-Photo.jpg";
import "./AboutUs.css";

const msg1 = `A great idea is just the beginning`;
const msg2 = `To grow and blossom, a founder’s vision must meet the experience
of mentors, the on-ground wisdom of practitioners, connections
with like-minded peers, the right talent, and the attention of
both sharks and angels. That is exactly what VOH INCUBATOR is
intended to achieve.`;

const About = ({ head1 = msg1, para1 = msg2, head2 = msg1, para2 = msg2 }) => {
  return (
    <>
      <div className="w-full h-auto bg-white py-4 px-4 ">
        <h1 className="text-[#DFA440] text-center text-5xl font-bold">About Us</h1>
        <div className="page w-full bg-[#F0F8FF] my-3">
          <h3 className="text-2xl text-center py-3">
            WELCOME TO INDIA'S FIRST AND FOREMOST ENTREPRENEURIAL <br />ECOSYSTEM FOCUSED ON HEALTHCARE
          </h3>
          <div className="combined_total flex justify-center items-center my-3 py-4 flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="flex-1 px-2 pl-5 py-5">
              <img src={Photo} className="h-full" alt="" />
            </div>
            <div className="flex-1 content1 px-4 ml-6 flex justify-center items-center flex-col">
              <h3 className="text-center text-[1.7rem] underline">{head1}</h3>
              <p className="text-[1.2rem] mt-4 self-start leading-8 font-light">
                {para1}
              </p>
            </div>
            <div className="flex-1 content1 px-4 ml-6 flex justify-center items-center flex-col">
              <h3 className="text-center text-[1.7rem] underline">{head2}</h3>
              <p className="text-[1.2rem] mt-4 self-start leading-8 font-light">
                {para2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
