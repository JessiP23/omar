"use client";
import { useState, FormEvent, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const result = await emailjs.send(
        'service_5fc4ooe',
        'template_19jvk66',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          projectType: formData.projectType || 'N/A',
          message: formData.message
        },
        'f-83OGUaYfxVnVlhJ',
      );
      
      if (result.text === 'OK') {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: ""
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit the form. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.classList.add('animate-fadeIn');
    }
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-red-50 p-8 rounded-lg shadow-lg border-l-4 border-red-500 transform transition-all duration-300 hover:shadow-xl">
      {submitted ? (
        <div className="text-center py-8 animate-fadeIn">
          <div className="bg-green-50 p-6 rounded-lg">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p>We've received your message and will get back to you soon.</p>
          </div>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md animate-pulse">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label htmlFor="projectType" className="block mb-1 font-medium">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Project Type</option>
                <option value="Residential">Residential Construction</option>
                <option value="Commercial">Commercial Construction</option>
                <option value="Renovation">Renovation</option>
                <option value="Kitchen">Kitchen Remodeling</option>
                <option value="Bathroom">Bathroom Remodeling</option>
                <option value="Outdoor">Outdoor & Landscaping</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label htmlFor="message" className="block mb-1 font-medium">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
              placeholder="Tell us about your project needs, timeline, budget considerations, or any specific requirements..."
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-white font-medium transform transition-all duration-300 ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-red-600 hover:bg-red-700 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Get a Free Quote"}
            </button>
          </div>
          
          <p className="text-sm text-center text-gray-500 mt-4">
            We respect your privacy and will never share your information with third parties.
          </p>
        </form>
      )}
    </div>
  );
}