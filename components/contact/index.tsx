'use client'
import Image from 'next/image';
import React, { useState } from 'react';

type FormErrors = {
  fullName?: string;
  contact?: string;
  subject?: string;
  message?: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Email or phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        fullName: '',
        contact: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get In <span className="text-amber-700">Touch</span>
          </h2>
          <p className="text-gray-600 text-base">
            Contact us by filling in the form provided below
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Full Name and Email/Phone in same row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email or Phone */}
                  <div>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Email ID or Phone Number"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-12 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Map and Contact Info */}
          <div className="relative">
            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Contact Info Overlay - Rounded bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-black/25 backdrop-blur-sm text-white px-6 py-4 rounded-b-2xl">
                    <div className="flex items-center justify-between">
                      {/* Contact Information */}
                      <div className="space-y-2">
                        {/* Phone Numbers */}
                        <div className="flex items-center space-x-3">
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Phone%20Icon.png" 
                            alt="Phone" 
                            className="w-5 h-5 flex-shrink-0"
                            width={10}
                            height={10}
                          />
                          <span className="text-sm font-medium">+91 9035784994 / +91 9736848479</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-3">
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Email%20Icon.png" 
                            alt="Email" 
                            className="w-5 h-5 flex-shrink-0"
                            width={10}
                            height={10}
                          />
                          <span className="text-sm font-medium">design@interiorwalaa.com</span>
                        </div>
                      </div>

                      {/* Social Media Icons */}
                      <div className="flex space-x-3">
                        <a
                          href="#"
                          className="w-9 h-9  rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Instagram.svg" 
                            alt="Instagram" 
                            className="w-5 h-5"
                            width={10}
                            height={10}
                          />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9  rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Facebook.svg" 
                            alt="Facebook" 
                            className="w-5 h-5"
                            width={10}
                            height={10}
                          />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9  rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                          <Image 
                            src="https://interiorwalaa.smepulse.in/LinkedIn%20-%20Negative.svg" 
                            alt="LinkedIn" 
                            className="w-5 h-5"
                            width={10}
                            height={10}
                          />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9  rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Vector.svg" 
                            alt="Twitter" 
                            className="w-5 h-5"
                            width={10}
                            height={10}
                          />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9  rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                          <Image 
                            src="https://interiorwalaa.smepulse.in/Youtube.svg" 
                            alt="YouTube" 
                            className="w-5 h-5"
                            width={10}
                            height={10}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;