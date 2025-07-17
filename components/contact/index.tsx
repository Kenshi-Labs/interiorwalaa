'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

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

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        fullName: '',
        contact: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 font-work-sans">
            Get In <span className="text-primary-brown">Touch</span>
          </h2>
          <p className="text-black text-base sm:text-lg font-manrope">
            Contact us by filling in the form provided below
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Contact Form */}
          <div className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 sm:space-y-6">
                {/* Full Name and Email/Phone in same row on larger screens, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--light-cream)] border border-[var(--primary-brown)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent transition-all duration-300 text-black placeholder-gray-500 font-manrope text-sm sm:text-base"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600 font-manrope">{errors.fullName}</p>
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--light-cream)] border border-[var(--primary-brown)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent transition-all duration-300 text-black placeholder-gray-500 font-manrope text-sm sm:text-base"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600 font-manrope">{errors.contact}</p>
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--light-cream)] border border-[var(--primary-brown)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent transition-all duration-300 text-black placeholder-gray-500 font-manrope text-sm sm:text-base"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600 font-manrope">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--light-cream)] border border-[var(--primary-brown)] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent transition-all duration-300 text-black placeholder-gray-500 font-manrope text-sm sm:text-base"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600 font-manrope">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center sm:justify-end">
                  <div className="text-center">
                    <Button
                      variant="interior"
                      className="shadow-lg w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Map and Contact Info */}
          <div className="relative">
            {/* Google Map */}
            <div className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl">
              <div className="h-64 sm:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.9568798261616!2d77.578524!3d12.910493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1571faebe99d%3A0x81ff88b041618f27!2sInteriorwalaa!5e0!3m2!1sen!2sin!4v1752752444976!5m2!1sen!2sin"
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
                  <div className="bg-black/40 backdrop-blur-sm text-white px-4 sm:px-6 py-3 sm:py-8 rounded-b-[20px] sm:rounded-b-[30px] -mx-px -mb-px">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      {/* Contact Information */}
                      <div className="space-y-2">
                        {/* Phone Numbers */}
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                          <span className="text-xs sm:text-sm font-medium font-manrope">+91 9035784994 / +91 9736848479</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                          <span className="text-xs sm:text-sm font-medium font-manrope">design@interiorwalaa.com</span>
                        </div>
                      </div>

                      {/* Social Media Icons */}
                      <div className="flex justify-center sm:justify-end space-x-2 sm:space-x-3">
                        <a
                          href="https://www.instagram.com/interiorwalaa/"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        >
                          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="https://www.facebook.com/rrenterprisejpnagar"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        >
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/interiorwalaa"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="https://x.com/Interiorwalaa"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        >
                          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        >
                          <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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