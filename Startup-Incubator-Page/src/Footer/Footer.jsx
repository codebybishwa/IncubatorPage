import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#205B4f] text-white w-full bottom-0">
            <div className="container mx-auto py-12 flex flex-col md:flex-row lg:flex-row justify-between items-center ">
                <div className="footer-col px-4 md:w-1/2 lg:w-full md:flex-col lg:flex-row ">
                    <div className="flex flex-col  mb-[1rem]">
                        <h1 className="text-2xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center">
                            We are here to boost our healthcare startups
                        </h1>
                        <h3 className="text-xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center font-light">VOH Incubator</h3>
                        <h3 className="text-xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center font-light">Healthcare Startups</h3>
                    </div>
                </div>
                <div className="footer-col px-4 sm:w-full md:w-1/2 lg:w-full sm:flex md:flex-row lg:flex justify-evenly items-center">
                    <div className="footer-links mb-6 mt-[2rem]">
                        <h4 className="text-xl font-semibold mb-4">About</h4>
                        <a href="#" className="block text-lg mb-2 font-light">Our story</a>
                        <a href="#" className="block text-lg mb-2 font-light">Experts</a>
                        <a href="#" className="block text-lg mb-2 font-light">Contact us</a>
                        <a href="#" className="block text-lg mb-2 font-light">Register Now</a>
                    </div>
                    <div className="footer-links  mt-[0.6rem]">
                        <h4 className="text-xl font-semibold mb-4">Get in touch</h4>
                        <p className="text-lg mb-2 leading-normal font-light">
                            Voice Of Healthcare, Awfis, 6th Floor,
                            <br /> Suncity Success Tower, Golf Course Ext Rd,
                            <br /> Sector 65, Gurugram, Haryana 122005 <br />+919931536096 <br />
                            katyayni.s@voiceofhealthcare.org
                        </p>
                    </div>
                </div>
            </div>
            <hr className="border-white" />
            <div className="container mx-auto py-12 text-center">
                <span className="text-sm">Copyright © 2024 VohIncubator. Powered by VohIncubator.</span>
            </div>
        </footer>
    );
};

export default Footer;
