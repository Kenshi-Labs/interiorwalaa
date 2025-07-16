'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([3])); // FAQ at index 3 is open by default

  const faqData = [
    {
      id: 0,
      question: "How do I get started with your design services?",
      answer: "Getting started is simple! Contact us through our website or phone to schedule a consultation. We'll discuss your vision, space requirements, and budget to create a customized design plan for your project."
    },
    {
      id: 1,
      question: "Why choose Interiorwalaa for my café design?",
      answer: "We specialize in commercial interior design with over 10 years of experience and 80+ successful projects. Our expertise spans cafés, restaurants, pubs, and hotels, ensuring industry-specific solutions that drive business success."
    },
    {
      id: 2,
      question: "Do you offer sustainable design options?",
      answer: "Absolutely! We're committed to eco-friendly design practices. We offer sustainable material options, energy-efficient lighting solutions, and environmentally conscious design approaches that reduce your carbon footprint while maintaining aesthetic appeal."
    },
    {
      id: 3,
      question: "Can I see a preview of the design before execution?",
      answer: "Yes! We provide detailed 3D renderings so you can visualize the final design before any work begins. This helps you make confident decisions and request changes if needed. Our goal is to ensure complete alignment before moving to execution."
    },
    {
      id: 4,
      question: "What's the typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Typically, design development takes 2-4 weeks, followed by 4-8 weeks for execution. We provide detailed timelines during consultation and keep you updated throughout the process."
    },
    {
      id: 5,
      question: "Do I need to hire separate contractors for execution?",
      answer: "No need! We offer comprehensive services from design to execution. Our experienced team handles everything in-house, including project management, contractor coordination, and quality control, ensuring seamless delivery."
    }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);


  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-amber-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop" 
          alt="Interior Design Background"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/20 to-transparent rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-amber-700">F</span>requently{' '}
            <span className="text-amber-700">A</span>sked{' '}
            <span className="text-amber-700">Q</span>uestions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our interior design services and process
          </p>
        </div>

        {/* FAQ Layout - Split into two independent columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq) => {
              const isOpen = openItems.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`
                     rounded-2xl shadow-md hover:shadow-lg transition-all duration-300
   ${isOpen ? 'bg-[#bba99c] border-l-4 border-l-[#8F5E3D]' : 'bg-white border border-gray-200'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none  rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center">
                      {/* Arrow Icon - Left Side */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4
                   ${isOpen ? 'bg-[#bba99c] text-[#8F5E3D]' : 'bg-gray-100 text-gray-600'}
                        rounded-full transition-all duration-300
                      `}>
                        <ChevronDown
                          className={`
                            w-5 h-5 transition-transform duration-300
                            ${isOpen ? 'rotate-180' : 'rotate-0'}
                          `}
                        />
                      </div>

                      <h3 className={`
                        text-lg md:text-xl font-semibold leading-tight flex-1
                        ${isOpen ? 'text-[#8F5E3D]' : 'text-gray-900'}
                        transition-colors duration-200
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-6 pb-6">
                      <div className={`
                        pt-2 border-t border-blue-200/50
                        ${isOpen ? 'animate-fadeInUp' : ''}
                      `}>
                        <p className="text-[#585859] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq) => {
              const isOpen = openItems.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`
                     rounded-2xl shadow-md hover:shadow-lg transition-all duration-300
                   ${isOpen ? 'bg-[#bba99c] border-l-4 border-l-[#8F5E3D]' : 'bg-white border border-gray-200'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center">
                      {/* Arrow Icon - Left Side */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4
                     ${isOpen ? 'bg-[#bba99c] text-[#8F5E3D]' : 'bg-gray-100 text-gray-600'}
                        rounded-full transition-all duration-300
                      `}>
                        <ChevronDown
                          className={`
                            w-5 h-5 transition-transform duration-300
                            ${isOpen ? 'rotate-180' : 'rotate-0'}
                          `}
                        />
                      </div>

                      <h3 className={`
                        text-lg md:text-xl font-semibold leading-tight flex-1
                        ${isOpen ? 'text-[#8F5E3D]' : 'text-gray-900'}
                        transition-colors duration-200
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-6 pb-6">
                      <div className={`
                        pt-2 border-t border-amber-200/50
                        ${isOpen ? 'animate-fadeInUp' : ''}
                      `}>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;