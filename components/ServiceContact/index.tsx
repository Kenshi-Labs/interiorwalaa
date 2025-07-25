'use client'
import React, { useState } from 'react'
import EditText from '../ui/EditText';
import { Button } from '../ui/button';
import TextArea from '../ui/TextArea';
import Image from 'next/image';

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

  return (
    <div className="w-full">
      <div className="flex flex-row justify-start items-center w-full mt-4 sm:mt-6 lg:mt-8">
        <div className="flex flex-col lg:flex-row justify-center items-stretch w-full bg-[#8e5e3d] overflow-hidden">
          
          {/* Form Section */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[45%] xl:w-[44%] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-work-sans font-semibold leading-tight text-white mb-2">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-manrope font-normal leading-relaxed text-white/90">
                Contact us by filling in the form provided below
              </p>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-end w-full">
              {/* Name and Phone Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-end items-center w-full">
                <EditText
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4"
                />
                <EditText
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  type="tel"
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4"
                />
              </div>

              {/* Query Textarea */}
              <TextArea
                placeholder="Your Query"
                value={formData.query}
                onChange={(e) => handleInputChange('query', e.target.value)}
                rows={5}
                className="w-full bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 focus:border-white/50 rounded-lg p-3 sm:p-4 resize-none"
              />

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                variant="outline"
                className="text-sm sm:text-base font-manrope font-semibold text-[#8e5e3d] border-2 border-white rounded-2xl px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white hover:text-[#8e5e3d] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#8e5e3d]"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[55%] xl:w-[56%] relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <Image
              src="https://interiorwalaa.smepulse.in/Rectangle%2034626858.png"
              alt="Contact Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 56vw"
              priority
            />
            {/* Optional overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8e5e3d]/20 to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceContact