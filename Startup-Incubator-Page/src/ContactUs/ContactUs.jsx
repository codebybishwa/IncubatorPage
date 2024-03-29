import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.message) {
            setFormError("Please fill in all fields.");
        } else {
            setFormError(""); 
        }
            console.log(formData);
    };

    return (
        <div className="contact my-20 mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center">
            <div className="contact-col w-1/2 md:w-full sm:w-full">
                <h1 className="font-bold text-5xl text-[#205B4F]">
                    Location & Opening <br /> Hours
                </h1>
                <div className="wrapper-1 first flex items-start">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F] ">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">
                            {" "}
                            OUR LOCATION
                        </h3>
                        <p>
                            Voice Of Healthcare, Unitech Cyberpark, Sector 39,
                            Gurugram, Haryana, India
                        </p>
                    </div>
                </div>
                
                <div className="wrapper-1 first flex items-start">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F] ">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">
                            OPENING HOURS
                        </h3>
                        <p>Mon-Sat: 10am-07pm</p>
                    </div>
                </div>
        
                <div className="wrapper-1 flex items-start">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F] ">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">
                            CONTACT
                        </h3>
                        <p>
                            Phone: +91 9931536096 <br />
                            Email : Katyani.s@voiceofhealthcare.org
                        </p>
                    </div>
                </div>
            </div>
            <div className="contact-col w-1/2 md:w-full sm:w-full">
                <div className="w-full mx-auto mt-10">
                    <h2 className="text-xl font-bold mb-4 text-[#205B4F]">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 leading-10">
                        <div>
                            <label className="text-xl text-[#676767] font-bold">Name</label>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xl text-[#676767] font-bold">Phone No.</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xl text-[#676767] font-bold mt-1.5">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xl text-[#676767] font-bold mt-1.5">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#205B4F] text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Submit
                        </button>
                    </form>
                    {formError && (
                        <p className="text-red-500 mt-4">{formError}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
