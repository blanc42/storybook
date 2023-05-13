import React, { useRef } from "react";
import Card from "./Cards/Card";

const Slider = () => {

const slider = useRef<HTMLDivElement>(null);
const innerSlider = useRef<HTMLDivElement>(null);

let dragging = false
let startx : number = 0
let x : number | null

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dragging = true
    console.log(slider.current)
    if ( slider.current ){
        slider.current.style.cursor = "dragging"
    }
}

const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging = false
    if ( slider.current ){
        slider.current.style.cursor = "drag"
    }
}

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    // https://stackoverflow.com/questions/35360704/wrong-offsetx-and-offsety-on-mousedown-event-of-parent-element
    if ( innerSlider.current && dragging ) {
        if (x == null) {
            x = e.clientX
            return
        }
        let change = e.clientX - x
        x = e.clientX
        let left = parseInt(innerSlider.current.style.left.slice(0,-2))
        innerSlider.current.style.left = `${left + change}px`
    }
    

    // let offsetX = e.clientX - rect.left - startx
    // startx = offsetX
    // if (slider.current && dragging) {
    //     console.log(offsetX)
    // }
    // if (innerSlider.current && dragging) {
    //     innerSlider.current.style.left = `${offsetX}px`
    // }
}



  return (
    <div
      ref={slider}
      className="slider max-w-full overflow-x-scroll p-4 border-slate-700 border-4"
      style={{
        cursor : "grab",
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

export default Slider;
