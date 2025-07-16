import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const allaboutimg1 = "https://interiorwalaa.smepulse.in/allaboutimg1.png"
const allaboutimg2 = "https://interiorwalaa.smepulse.in/allaboutimg2.png"
const allaboutimg3 = "https://interiorwalaa.smepulse.in/allaboutimg3.png"

const AllAbout = () => {
    return (
        <div className='bg-[var(--color-neutral-light)] py-16'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row gap-8 items-center justify-center'>
                    {/* Left Section - Images with Dynamic Positioning */}
                    <div className='lg:w-1/2 relative flex justify-end'>
                        <div className='relative w-full max-w-xl'>
                            {/* Top Image - First image positioned at top */}
                            <div className='relative mb-4 flex justify-center'>
                                <Image
                                    width={500}
                                    height={500}
                                    src={allaboutimg1}
                                    alt="Modern dining room"
                                    className='w-full max-w-[500px] h-36 object-cover rounded-xl'
                                />
                            </div>

                            {/* Second Image - Positioned below first image */}
                            <div className='relative mb-6 flex justify-center'>
                                <Image
                                    width={500}
                                    height={500}
                                    src={allaboutimg2}
                                    alt="Cozy bar interior"
                                    className='w-full max-w-[500px] h-72 object-cover rounded-xl'
                                />
                            </div>

                            {/* Third Image - Positioned on top of second image in left corner */}
                            <div className='relative -mt-[180px] flex justify-start'>
                                <Image
                                    width={500}
                                    height={500}
                                    src={allaboutimg3}
                                    alt="Modern bedroom"
                                    className='w-[215px] h-52 object-cover rounded-xl'
                                />
                                {/* Success Projects Overlay */}
                                <div className='absolute bottom-4 right-[260px] bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg flex flex-col items-center justify-center'>
                                    <div className='text-3xl font-bold'>150+</div>
                                    <div className='text-sm text-center'>Successful </div>
                                    <div className='text-sm text-center'> Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className='lg:w-1/2 space-y-6 flex flex-col items-start justify-center'>
                        <div className='space-y-2'>
                            <h2 className='text-2xl font-medium text-[var(--color-text-primary)] font-work-sans'>
                                All About
                            </h2>
                            <h1 className='text-5xl font-semibold text-[var(--color-primary)] font-work-sans leading-[100%]'>
                                Interiorwalaa
                            </h1>
                        </div>

                        <div className='space-y-4 max-w-[600px]'>
                            <p className='text-xl font-normal text-[var(--color-text-primary)] font-manrope leading-[150%]'>
                                Interiorwalaa stands at the forefront of commercial interior designers in Bangalore. With six years of industry leadership and more than 50 spaces transformed nationwide, we excel in designing interiors that resonate with quality and distinction.
                            </p>

                            <p className='text-xl font-normal text-[var(--color-text-primary)] font-manrope leading-[150%]'>
                                Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.
                            </p>
                        </div>

                        {/* Call to Action Button */}
                        <Button
                            variant="interior"
                            className="hidden md:flex"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAbout
