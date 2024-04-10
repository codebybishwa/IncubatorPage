import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
    });

    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.comments) {
            setFormError("Please fill in all fields.");
        } else {
            try {
                // Combine firstName and lastName into a single 'name' field
                const fullName = `${formData.firstName} ${formData.lastName}`;
                const requestData = {
                    ...formData,
                    name: fullName, // 'name' field with combined value
                };

                // Make POST request to the API endpoint
                const response = await axios.post("https://api.nextedge.health/api/v1/incubator/contactUs", requestData);
                console.log("API Response:", response.data);

                // Reset form data and clear form error on successful submission
                setFormError("");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    comments: "",
                });
            } catch (error) {
                console.error("Error submitting form:", error);
                setFormError("Failed to submit form. Please try again.");
            }
        }
    };

    return (
        <div className="contact max-w-[90%] my-20 mx-auto flex flex-col md:flex-row items-center">
            {/* Left Section - Contact Information */}
            <div className="contact-col w-full md:w-1/2 mx-auto md:mx-0 md:pr-8 mb-10 md:mb-0">
                <h1 className="font-bold text-5xl text-[#205B4F] mb-7">
                    Location & Opening <br /> Hours
                </h1>
                {/* Location */}
                <div className="wrapper-1 first flex items-start mb-6">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F]">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">OUR LOCATION</h3>
                        <p>Voice Of Healthcare, Unitech Cyberpark, Sector 39, Gurugram, Haryana, India</p>
                    </div>
                </div>
                {/* Opening Hours */}
                <div className="wrapper-1 flex items-start mb-6">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F]">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">OPENING HOURS</h3>
                        <p>Mon-Sat: 10am-07pm</p>
                    </div>
                </div>
                {/* Contact */}
                <div className="wrapper-1 flex items-start">
                    <div className="icon flex justify-center items-center text-lg mr-3 mt-3 text-[#205B4F]">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="content">
                        <h3 className="text-2xl text-[#205B4F] font-semibold leading-loose">CONTACT</h3>
                        <p>Phone: +91 9931536096 <br />Email: Katyani.s@voiceofhealthcare.org</p>
                    </div>
                </div>
            </div>


            {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2 mx-auto md:mx-0">
                <h2 className="text-xl font-bold mb-4 text-[#205B4F]">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 leading-10">
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
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        required
                    />
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#205B4F] text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    >
                        Submit
                    </button>
                    {formError && (
                        <p className="text-red-500 mt-4">{formError}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
