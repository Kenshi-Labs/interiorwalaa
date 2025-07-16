import React from 'react'

const ScrollWrapper = () => {
  return (
    <section className="w-full h-[120px] md:h-[180px] lg:h-[236px] bg-[#8F5E3D] flex items-center justify-center overflow-hidden">
      <div className="relative h-[60px] md:h-[90px] lg:h-[115px] overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap [font-family:'Manrope',Helvetica] text-[#efebe8] text-3xl md:text-6xl lg:text-8xl text-center leading-[60px] md:leading-[90px] lg:leading-[115.2px] font-normal tracking-[0]">
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors&nbsp;&nbsp;&nbsp;&nbsp;
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors&nbsp;&nbsp;&nbsp;&nbsp;
          Cafe Interiors / Pub Interiors / Restaurant Interiors / Hotel Interiors
        </div>
      </div>
    </section>
  )
}

export default ScrollWrapper