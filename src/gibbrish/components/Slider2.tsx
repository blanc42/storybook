import React, { useRef } from "react";
import Card from "./Cards/Card";

const Slider2 = () => {
  const slider = useRef<HTMLDivElement>(null);
  const innerSlider = useRef<HTMLDivElement>(null);

    let startx = 0
    let dragging = false

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        dragging = true
        if ( slider.current ){
            slider.current.style.cursor = "dragging"
        }
        startx = e.clientX
    }
    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        dragging = false
        if ( slider.current ){
            slider.current.style.cursor = "drag"
        }
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        let change = e.clientX - startx
        if ( innerSlider.current && dragging ){
            innerSlider.current.style.left = innerSlider.current.style.left + change 
            console.log(change)
        }
        startx = e.clientX
    }
  return (
    <div
      ref={slider}
      className="slider max-w-full overflow-x-scroll p-4 border-slate-700 border-4"
      style={{
        cursor: "grab",
      }}
    >
      <div
        ref={innerSlider}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="innerSlider grid grid-flow-col gap-1 relative"
      >
        <Card text="1" />
        <Card text="2" />
        <Card text="3" />
        <Card text="4" />
        <Card text="5" />
        <Card text="6" />
        <Card text="7" />
        <Card text="8" />
        <Card text="9" />
        <Card text="10" />
        <Card text="11" />
        <Card text="12" />
      </div>
    </div>
  );
};

export default Slider2;
