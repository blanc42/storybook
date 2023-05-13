import React from "react";
import star from '../../../assets/star.svg'

const CCard = () => {
  return (
    <div className="w-[250px] h-[400px] p-2">
      <img src="/imgs/dl.jpeg" alt="" />
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Deep Learning</h1>
          <p className="flex items-center">5 <img src={star} alt="" className="w-5" /></p>
        </div>
        <div className="flex text-sm overflow-hidden gap-1">
          <p className="bg-red-700 px-1">MIT</p>
          <p className="bg-green-700 px-1">Deep learning</p>
        </div>
      </div>
    </div>
  );
};

export default CCard;
