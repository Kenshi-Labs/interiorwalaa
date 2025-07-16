import React from 'react';
import { whyChooseUsData } from '../../data/whychooseusdata';

const bgImage = "https://interiorwalaa.smepulse.in/whychooseus.jpg";

// Card component for reusability
const Card = ({ title, description, isBrown = false, isRotated = false }: {
    title: string;
    description: string;
    isBrown?: boolean;
    isRotated?: boolean;
}) => {
    return (
        <div
            className={`rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-5 lg:p-6 min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex flex-col justify-start ${isBrown
                ? 'text-white'
                : 'bg-white text-text-primary'
                } ${isRotated ? 'transform -rotate-3 sm:-rotate-4 lg:-rotate-6' : ''}`}
            style={{
                backgroundColor: isBrown ? '#9b7961' : undefined,
                boxShadow: '5px 5px 10px 0px #9b796140',
            }}
        >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 font-work-sans">
                {title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed font-manrope flex-grow">
                {description}
            </p>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* First Row - Heading Section and 2 Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-6">
                    {/* Left Column - Heading Section */}
                    <div className="lg:col-span-1 flex flex-col justify-center order-1 lg:order-1">
                        <div className="mb-6 sm:mb-8 lg:mb-8 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                                <span
                                    className="block font-work-sans text-text-primary"
                                >
                                    Why
                                </span>
                                <span
                                    className="block font-work-sans font-semibold text-primary-brown"
                                >
                                    Choose Us?
                                </span>
                            </h2>
                            <p
                                className="text-base sm:text-lg lg:text-lg mt-3 sm:mt-4 lg:mt-4 text-text-secondary font-manrope"
                            >
                                {whyChooseUsData.intro.subheading}
                            </p>
                        </div>
                    </div>

                    {/* Right Columns - First 2 Cards */}
                    <div className="lg:col-span-2 mb-5 order-2 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6">
                            {/* Card 1 - Brown Background with rotation */}
                            <Card
                                title={whyChooseUsData.row1[0].title}
                                description={whyChooseUsData.row1[0].description}
                                isBrown={true}
                                isRotated={true}
                            />

                            {/* Card 2 - White Background */}
                            <Card
                                title={whyChooseUsData.row1[1].title}
                                description={whyChooseUsData.row1[1].description}
                            />
                        </div>
                    </div>
                </div>

                {/* Second Row - 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 lg:col-start-2 lg:col-span-2">
                    {whyChooseUsData.row2.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
