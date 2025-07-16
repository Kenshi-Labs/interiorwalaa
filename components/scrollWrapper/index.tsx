import React from 'react'

const ScrollWrapper = () => {
  return (
    <section className="w-full h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[236px] bg-[var(--secondary-brown)] flex items-center justify-center overflow-hidden">
      <div className="relative h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[115px] overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap font-manrope text-[var(--light-cream)] text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-center leading-[50px] sm:leading-[60px] md:leading-[80px] lg:leading-[100px] xl:leading-[115.2px] font-normal tracking-[0]">
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors&nbsp;&nbsp;&nbsp;&nbsp;
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors&nbsp;&nbsp;&nbsp;&nbsp;
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors
        </div>
      </div>
    </section>
  )
}

export default ScrollWrapper