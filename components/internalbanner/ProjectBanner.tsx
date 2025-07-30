'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projectbanner = [
    {
        id: 1,
        title: "Eleven Bakehouse",
        image: "https://interiorwalaa.smepulse.in/Rectangle%20202.png",
    },
    {
        id: 2,
        title: "Belgian Waffle Factory",
        image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(1).png",
    },
    {
        id: 3,
        title: "Wow Momo",
        image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(3).png",
    },
]

const projectbannerbg = "https://interiorwalaa.smepulse.in/projectbannerbg.png"

const ProjectBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0) // Changed to 0-based index

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % projectbanner.length)
    }

    const prevSlide = () => {
        setCurrentSlide(prev => prev === 0 ? projectbanner.length - 1 : prev - 1)
    }

    // Helper function to get slide index with proper wrapping
    const getSlideIndex = (offset: number) => {
        const totalSlides = projectbanner.length
        return ((currentSlide + offset + totalSlides) % totalSlides)
    }

    return (
        <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat -mt-[72px] sm:-mt-[80px] md:-mt-[88px] lg:-mt-[88px]">
            {/* Background Image */}
            <Image
                src={projectbannerbg}
                alt="Project Banner Background"
                fill
                className="object-cover"
                priority
            />

            {/* Background Overlay */}
            <div className="absolute inset-0 backdrop-blur-[4px] bg-white/20" />

            {/* Mobile & Tablet Layout */}
            <div className="lg:hidden relative z-10 flex flex-col min-h-screen px-4 sm:px-6 py-8 mt-[72px] sm:mt-[80px] md:mt-[88px]">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                    <h1 className="text-[#FDFEFF] text-3xl sm:text-4xl md:text-5xl font-medium leading-tight font-serif">
                        Projects
                    </h1>
                    <p className="text-[#FDFEFF] font-light text-base sm:text-lg md:text-xl leading-relaxed opacity-95 font-['manrope'] max-w-sm sm:max-w-md">
                        Interiorwalaa stands at the forefront of commercial interior designers in Bangalore
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
                    {/* Main Project Card */}
                    <div className="relative w-full max-w-sm sm:max-w-md h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
                        <Image
                            src={projectbanner[currentSlide].image}
                            alt={projectbanner[currentSlide].title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-medium font-['WorkSans'] text-xl sm:text-2xl md:text-3xl mb-2">
                                {projectbanner[currentSlide].title}
                            </h3>
                            <p className="text-white/80 font-light text-sm sm:text-base">
                                Project {currentSlide + 1} of {projectbanner.length}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center space-x-6 sm:space-x-8">
                        <button
                            onClick={prevSlide}
                            className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} className="text-white" strokeWidth={2} />
                        </button>

                        {/* Progress Dots */}
                        <div className="flex space-x-2 sm:space-x-3">
                            {projectbanner.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-white scale-125'
                                        : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} className="text-white" strokeWidth={2} />
                        </button>
                    </div>

                    {/* Slide Counter */}
                    <div className="text-center">
                        <span className="text-white font-['WorkSans'] font-semibold text-lg sm:text-xl">
                            <span>{currentSlide + 1}</span>
                            <span className="text-white/60">/{projectbanner.length}</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Desktop/Laptop Layout - Unchanged */}
            <div className="hidden lg:flex relative z-10 flex-row items-center justify-between min-h-screen px-12 xl:px-24 py-0">
                {/* Left Content */}
                <div className="flex flex-col space-y-8 w-auto text-left">
                    <h1 className="text-[#FDFEFF] text-5xl xl:text-6xl font-medium mb-4 leading-tight font-serif">
                        Projects
                    </h1>
                    <p className="text-[#FDFEFF] font-light text-xl xl:text-xl leading-relaxed opacity-95 font-['manrope'] max-w-lg xl:max-w-xl">
                        Interiorwalaa stands at the forefront of commercial interior designers in Bangalore
                    </p>
                </div>

                {/* Right Content - Carousel */}
                <div className="relative flex flex-col items-center space-y-3 w-auto mt-28">
                    {/* Carousel Cards */}
                    <div className="flex items-center justify-center space-x-6 w-full">
                        {/* Previous Project (Partially Visible) */}
                        <div className="relative w-[200px] h-[320px] xl:w-[250px] xl:h-[400px] overflow-hidden opacity-70 transition-opacity duration-300">
                            <Image
                                src={projectbanner[getSlideIndex(-1)].image}
                                alt={projectbanner[getSlideIndex(-1)].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                            <div className="absolute bottom-4 left-4 text-white font-medium font-['WorkSans'] text-lg">
                                {projectbanner[getSlideIndex(-1)].title}
                            </div>
                        </div>

                        {/* Current Project (Main) - Highlighted */}
                        <div className="relative w-[370px] h-[500px] xl:w-[400px] xl:h-[550px] overflow-hidden shadow-2xl transform scale-105 transition-all duration-300">
                            <Image
                                src={projectbanner[currentSlide].image}
                                alt={projectbanner[currentSlide].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                            <div className="absolute bottom-4 left-4 text-white font-medium font-['WorkSans'] text-2xl xl:text-3xl">
                                {projectbanner[currentSlide].title}
                            </div>
                        </div>

                        {/* Next Project (Partially Visible) */}
                        <div className="relative w-[200px] h-[320px] xl:w-[250px] xl:h-[400px] overflow-hidden opacity-70 transition-opacity duration-300">
                            <Image
                                src={projectbanner[getSlideIndex(1)].image}
                                alt={projectbanner[getSlideIndex(1)].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                            <div className="absolute bottom-4 left-4 text-white font-medium font-['WorkSans'] text-lg">
                                {projectbanner[getSlideIndex(1)].title}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center space-x-4 w-full justify-center">
                        <span className="text-white font-['WorkSans'] font-semibold text-xl leading-tight">
                            <span>{currentSlide + 1}</span>
                            <span className="text-[#dedede]">/{projectbanner.length}</span>
                        </span>

                        {/* Progress Bar */}
                        <div className="w-[82.5px] h-[4.1px] bg-white rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white rounded-full transition-all duration-300"
                                style={{ width: `${((currentSlide + 1) / projectbanner.length) * 100}%` }}
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center">
                            <button
                                onClick={prevSlide}
                                className="p-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={24} className="w-8 h-8 text-white" strokeWidth={2} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="p-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={24} className="w-8 h-8 text-white" strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBanner
