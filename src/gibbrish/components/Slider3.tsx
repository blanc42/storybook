import React, { MouseEvent, useRef, useState } from "react";

const Slider: React.FC = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]; // Set your slide content here

  const sliderRef = useRef<HTMLDivElement>(null);
  const innerSliderRef = useRef<HTMLDivElement>(null);

  //   const [left, setLeft] = useState<number>(0);

  let StartX: number;
  let change: number;
  let isDragging = false;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    StartX = e.clientX;
    if ( sliderRef.current ){
      sliderRef.current.scrollLeft += 50
    }
    console.log("left :", (e.currentTarget as HTMLDivElement).offsetLeft)
    console.log("document height is " ,document.body.scrollHeight)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (innerSliderRef.current && isDragging && sliderRef.current) {
      change = e.clientX - StartX;

      let left = Math.round(
        innerSliderRef.current.getBoundingClientRect().left
      );
      let newLeft = left - innerSliderRef.current.offsetLeft + change;
      const innerLeft = innerSliderRef.current?.offsetLeft || 0;
      const sliderLeft = sliderRef.current?.offsetLeft || 0;
      const leftRelativeToSlider = innerLeft - sliderLeft;
      console.log(
        "innerSliderRef.current.getBoundingClientRect().left ",
        Math.round(innerSliderRef.current.getBoundingClientRect().left),
        "sliderRef.current.offsetLeft",
        sliderRef.current.offsetLeft,
        "innerSliderRef.current.offsetLeft ",
        innerSliderRef.current.offsetLeft,
        "change ",
        change,
        "innerSliderRef.current.clientWidth ",
        innerSliderRef.current.clientWidth,
        "newleft ",
        newLeft,
        "current-left",
        leftRelativeToSlider,
        "innerSliderRef.current.offsetWidth",
        innerSliderRef.current.offsetWidth,
        "e.target.offsetLeft",
        e.clientX - (e.target as HTMLDivElement).offsetLeft
      );

      //   if (leftRelativeToSlider < 0){
      //     innerSliderRef.current.style.left = `0px`
      //   }
      console.log(innerSliderRef.current.style.left);

      if (
        innerSliderRef.current.offsetLeft + change <= sliderRef.current.offsetLeft 
      ) {
        innerSliderRef.current.style.left = `${leftRelativeToSlider + change}px`;
        StartX = e.clientX;
      } else {
        innerSliderRef.current.style.left = `${0}px`;
      }
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div ref={sliderRef} className="w-[800px] overflow-x-hidden">
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
            className="h-[200px] flex-grow flex justify-center items-center bg-pink-300"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
