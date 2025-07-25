'use client'
import React, { useState } from 'react'
import EditText from '../ui/EditText';
import { Button } from '../ui/button';
import TextArea from '../ui/TextArea';

interface FormData {
  fullName: string;
  phoneNumber: string;
  query: string;
}

const ServiceContact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    query: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      query: ''
    });
  };

  const letconnectvideo = "https://interiorwalaa.smepulse.in/letconnectvideo.mp4"

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row justify-start items-center w-full mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        <div className="flex flex-col lg:flex-row justify-center items-stretch w-full bg-primary-brown overflow-hidden">

          {/* Form Section */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[50%] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {/* Header */}
            <div className="mb-4 sm:mb-6 md:mb-8 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-work-sans font-semibold leading-tight text-white mb-2 sm:mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg font-manrope font-normal leading-relaxed text-white/90">
                Contact us by filling in the form provided below
              </p>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-start items-stretch w-full">
              {/* Name and Phone Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-start items-stretch w-full">
                <EditText
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4 text-sm sm:text-base"
                />
                <EditText
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  type="tel"
                  className="w-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4 text-sm sm:text-base"
                />
              </div>

              {/* Query Textarea */}
              <TextArea
                placeholder="Your Query"
                value={formData.query}
                onChange={(e) => handleInputChange('query', e.target.value)}
                rows={10}
                className="w-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4 resize-none text-sm sm:text-base"
              />

              {/* Submit Button */}
              <div className="flex justify-end w-full">
                <Button
                  onClick={handleSubmit}
                  variant="outline"
                  className="w-auto text-xs sm:text-sm font-manrope font-semibold text-primary-brown border-2 border-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 hover:bg-white hover:text-primary-brown transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-brown"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-[50%] relative min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[650px] order-first lg:order-last">
            <video
              src={letconnectvideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-brown/20 to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceContact