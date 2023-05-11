import React, { MouseEvent, useRef, useState } from "react";

const Slider4: React.FC = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]; // Set your slide content here

  const sliderRef = useRef<HTMLDivElement>(null);
  const innerSliderRef = useRef<HTMLDivElement>(null);

  //   const [left, setLeft] = useState<number>(0);

  let isDragging = false;
  let StartX: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // mouse down
    isDragging = true;
    if (innerSliderRef.current){
        StartX = e.clientX - innerSliderRef.current.offsetLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // started moving
    e.preventDefault()
    const change = e.clientX - StartX
    if (innerSliderRef.current && isDragging) {
        innerSliderRef.current.style.left = `${change}px`
    }
    checkBoundry()
  }

//   boundry check
  function checkBoundry(){
    if (sliderRef.current && innerSliderRef.current) {
        const inner = innerSliderRef.current.getBoundingClientRect()
        const outer = sliderRef.current.getBoundingClientRect()
        if (parseInt(innerSliderRef.current.style.left) > 0){
            innerSliderRef.current.style.left = '0px'
        } else if (inner.right < outer.right ) {
            // this I didn't understand yet
            innerSliderRef.current.style.left = `-${inner.width - outer.width}px`
        }
    }
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
      isDragging = false;   
    
  };

  return (
    <div ref={sliderRef} className="w-[800px] overflow-hidden relative">
      <div
        ref={innerSliderRef}
        onMouseDown={handleMouseDown}
        className="flex w-[200%] gap-2 relative cursor-grab active:cursor-grabbing active:select-none"
        onMouseOver={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[200px] font-bold text-4xl text-white flex-grow flex justify-center items-center bg-violet-500"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider4;
