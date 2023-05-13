import React from "react";

const Sorting = () => {
  const arr = [3, 4, 1, 2, 5];
  const max = 5;
  return (
    <div>
      <h1 className="text-2xl font-bold">Sorting</h1>
      <div className="flex relative gap-x-1 w-[400px] h-[600px] border-2 border-green-400">
        {arr.map((i, index) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
                left: `${(400/arr.length)*index}px`,
              width: `${400 / arr.length}px`,
              height: `${(600 * i) / max}px`,
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 156
              )},${Math.floor(Math.random() * 156)}, ${Math.floor(
                Math.random() * 156
              )})`,
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
