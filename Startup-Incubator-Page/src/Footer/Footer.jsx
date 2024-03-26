import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#205B4f] text-white w-full bottom-0">
            <div className="container mx-auto py-12 flex flex-col md:flex lg:flex-row justify-between items-center">
                <div className="footer-col px-4 md:w-1/2 lg:w-full md:flex-col lg:flex-row">
                    <h1 className="text-3xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center">
                        We are here to boost our healthcare startups
                    </h1>
                    <h3 className="text-xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center">VOH Incubator</h3>
                    <h3 className="text-xl mb-6 lg:leading-normal font-semibold text-center md:text-left lg:text-center">Healthcare Startups</h3>
                </div>
                <div className="footer-col px-4 sm:w-full md:w-full lg:w-full sm:flex md:flex-row lg:flex justify-evenly items-center">
                    <div className="footer-links mb-6 mt-5 md:mt-0">
                        <h4 className="text-2xl font-semibold mb-4">About</h4>
                        <a href="#" className="block text-lg mb-2">Our story</a>
                        <a href="#" className="block text-lg mb-2">Experts</a>
                        <a href="#" className="block text-lg mb-2">Contact us</a>
                        <a href="#" className="block text-lg mb-2">Register Now</a>
                    </div>
                    <div className="footer-links">
                        <h4 className="text-2xl font-semibold mb-4">Get in touch</h4>
                        <p className="text-lg mb-2 leading-normal">
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
