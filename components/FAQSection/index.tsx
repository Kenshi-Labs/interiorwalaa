'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface FAQSectionProps {
  title: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
  isLoading?: boolean;
}

const FAQSection = ({ title, items, isLoading = false }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First FAQ is open by default

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqBg = "https://interiorwalaa.smepulse.in/faqbg.jpg"

  if (isLoading) {
    return (
      <section className="py-16 lg:py-16 bg-[var(--light-cream)] relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-24 bg-gray-200 rounded mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-16 bg-[var(--light-cream)] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={faqBg}
          alt="Interior Design Background"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal font-['WorkSans'] leading-tight mb-4">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {word.length > 0 ? (
                  <>
                    <span className="text-[var(--primary-brown)] font-semibold">{word.charAt(0)}</span>
                    {word.slice(1)}
                  </>
                ) : (
                  word
                )}
                {index < title.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>
        </div>

        {/* FAQ Layout - Split into two independent columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {items.slice(0, Math.ceil(items.length / 2)).map((faq, index) => {
              const isOpen = openItems.has(index);

              return (
                <div
                  key={index}
                  className={`
                    rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform cursor-pointer
                    ${isOpen ? 'bg-[var(--background-brown)] scale-[1.02]' : 'bg-white hover:scale-[1.01]'}
                    border-l-4 rounded-l-lg transition-colors duration-500 ease-in-out
                    ${isOpen ? 'border-l-[var(--primary-brown)]' : 'border-l-transparent'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left focus:outline-none rounded-2xl transition-all duration-300 cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                    id={`faq-answer-${index}`}
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
            {items.slice(Math.ceil(items.length / 2)).map((faq, index) => {
              const actualIndex = Math.ceil(items.length / 2) + index;
              const isOpen = openItems.has(actualIndex);

              return (
                <div
                  key={actualIndex}
                  className={`
                    rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform cursor-pointer
                    ${isOpen ? 'bg-[var(--background-brown)] scale-[1.02]' : 'bg-white hover:scale-[1.01]'}
                    border-l-4 rounded-l-lg transition-colors duration-500 ease-in-out
                    ${isOpen ? 'border-l-[var(--primary-brown)]' : 'border-l-transparent'}
                  `}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(actualIndex)}
                    className="w-full p-6 text-left focus:outline-none rounded-2xl transition-all duration-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${actualIndex}`}
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
                        text-lg md:text-xl font-semibold font-semibold font-manrope leading-tight flex-1
                        ${isOpen ? 'text-[var(--primary-brown)]' : 'text-[var(--dark-gray)]'}
                        transition-all duration-300 ease-in-out
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${actualIndex}`}
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