import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can add API call logic here

        // Clear form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-[#f5f5f5] p-6 md:p-12 rounded-t-[100px]">
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name and Email */}
                <div className="flex flex-col md:flex-row gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="flex-1 rounded-xl bg-[#e5e5e5] p-6 text-lg text-gray-700 placeholder-gray-600 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="flex-1 rounded-xl bg-[#e5e5e5] px-6 py-4 text-lg text-gray-700 placeholder-gray-600 focus:outline-none"
                    />
                </div>

                {/* Message */}
                <textarea
                    name="message"
                    placeholder="Your message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-[#e5e5e5] px-6 py-6 text-lg text-gray-700 placeholder-gray-600 focus:outline-none h-40 resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#ff3e1d] text-white text-3xl font-semibold rounded-xl py-6 hover:bg-black transition duration-300"
                >
                    Let’s Discuss
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
