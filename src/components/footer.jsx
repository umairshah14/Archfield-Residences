
'use client'
import { Button } from "@headlessui/react";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, submit the form
      fetch("https://getform.io/f/adryxera", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully!");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
            setErrors({});
            setIsSubmitted(true); // Set submission status to true
          } else {
            console.error("Form submission failed.");
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false); // Reset submission status on validation error
    }
  };

  return (
    <div>
      <div className="bg-[#2B2C32] fill pt-20 pb-8 text-white ">
        <div className="relative px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-10">
            <h3 className="text-4xl sm:text-5xl ">Get in touch</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div>
                <h6 className="pb-2">Address</h6>
                <p className="w-2/3">128 City Road, London, EC1V 2NX</p>
              </div>
              <div>
                <h6 className="pb-2">Contact</h6>
                <p>Email: contact@archfieldresidences.com</p>
                <p>Phone: 0208 058 0028</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:w-1/2"
          >
            <div className="flex flex-col ">
              <p>First Name*</p>
              <input
                type="text"
                name="firstName"
                aria-label="text"
                className="p-2 text-black"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            </div>
            <div className="flex flex-col ">
              <p>Last Name*</p>
              <input
                type="text"
                name="lastName"
                aria-label="text"
                className="p-2 text-black"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </div>
            <div className="flex flex-col ">
              <p>Your Email*</p>
              <input
                type="email"
                name="email"
                aria-label="text"
                className="p-2 text-black"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col ">
              <p>Message*</p>
              <textarea
                rows={4}
                name="message"
                aria-label="text"
                className="p-2 text-black"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>
            <Button
              type="submit"
              className="w-full bg-black px-4 py-3 text-white rounded-md mt-3"
            >
              Submit
            </Button>
            {isSubmitted && (
              <p className="text-green-500 mt-4">Thank you, we have recieved your message. Someone from the team will be in touch within 48 hours.
              </p>
            )}
          </form>
        </div>
        <p className="mt-14  px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          © 2024 Archfield Residences. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;