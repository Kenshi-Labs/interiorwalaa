'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([3])); // FAQ at index 3 is open by default

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
    <section className="py-16 lg:py-16 bg-[var(--light-cream)] relative overflow-hidden">
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

      <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal font-work-sans leading-tight mb-4">
            <span className="text-[var(--primary-brown)] font-semibold">F</span>requently{' '}
            <span className="text-[var(--primary-brown)] font-semibold">A</span>sked{' '}
            <span className="text-[var(--primary-brown)] font-semibold">Q</span>uestions
          </h2>
          <p className="text-lg md:text-xl font-manrope text-[var(--dark-gray)] max-w-3xl mx-auto">
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
                    rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform cursor-pointer
                    ${isOpen ? 'bg-[var(--background-brown)] scale-[1.02]' : 'bg-white hover:scale-[1.01]'}
                    border-l-4 rounded-l-lg transition-colors duration-500 ease-in-out
                    ${isOpen ? 'border-l-[var(--primary-brown)]' : 'border-l-transparent'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none rounded-2xl transition-all duration-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center">
                      {/* Arrow Icon - Left Side */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4
                        ${isOpen ? 'text-[var(--primary-brown)]' : 'text-[var(--dark-gray)]'}
                        rounded-full transition-all duration-500 ease-in-out
                      `}>
                        <ChevronDown
                          className={`
                            w-5 h-5 transition-all duration-500 ease-in-out
                            ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}
                          `}
                        />
                      </div>

                      <h3 className={`
                        text-lg md:text-xl font-semibold font-manrope leading-tight flex-1
                        ${isOpen ? 'text-[var(--primary-brown)]' : 'text-[var(--dark-gray)]'}
                        transition-all duration-300 ease-in-out
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`
                      overflow-hidden transition-all duration-700 ease-in-out
                      ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-6 pb-6">
                      <div className={`
                        transform transition-all duration-500 ease-out
                        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                      `}>
                        <p className="text-[var(--dark-gray-alt)] leading-relaxed font-manrope">
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
                    rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform cursor-pointer
                    ${isOpen ? 'bg-[var(--background-brown)] scale-[1.02]' : 'bg-white hover:scale-[1.01]'}
                    border-l-4 rounded-l-lg transition-colors duration-500 ease-in-out
                    ${isOpen ? 'border-l-[var(--primary-brown)]' : 'border-l-transparent'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none rounded-2xl transition-all duration-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center">
                      {/* Arrow Icon - Left Side */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4
                        ${isOpen ? 'text-[var(--primary-brown)]' : 'text-[var(--dark-gray)]'}
                        rounded-full transition-all duration-500 ease-in-out
                      `}>
                        <ChevronDown
                          className={`
                            w-5 h-5 transition-all duration-500 ease-in-out
                            ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}
                          `}
                        />
                      </div>

                      <h3 className={`
                        text-lg md:text-xl font-semibold font-manrope leading-tight flex-1
                        ${isOpen ? 'text-[var(--primary-brown)]' : 'text-[var(--dark-gray)]'}
                        transition-all duration-300 ease-in-out
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`
                      overflow-hidden transition-all duration-700 ease-in-out
                      ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-6 pb-6">
                      <div className={`
                        transform transition-all duration-500 ease-out
                        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                      `}>
                        <p className="text-[var(--dark-gray-alt)] leading-relaxed font-manrope">
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

      {/* Custom CSS for enhanced animations */}
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
        
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.7s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;