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
            className={`rounded-3xl p-6 ${isBrown
                    ? 'bg-primary-brown text-white'
                    : 'bg-white text-text-primary'
                } ${isRotated ? 'transform -rotate-6' : ''}`}
            style={{
                boxShadow: '5px 5px 10px 0px var(--primary-brown)40',
            }}
        >
            <h3 className="text-xl font-bold mb-3 font-work-sans">
                {title}
            </h3>
            <p className="text-base leading-relaxed font-manrope">
                {description}
            </p>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-10 overflow-hidden ">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-6">
                    {/* Left Column - Heading Section */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl lg:text-5xl leading-tight">
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
                                className="text-lg mt-4 text-text-secondary font-manrope"
                            >
                                {whyChooseUsData.intro.subheading}
                            </p>
                        </div>
                    </div>

                    {/* Right Columns - First 2 Cards */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:col-start-2 lg:col-span-2">
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
