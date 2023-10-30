import React from "react";

const ThirdComponent = ({ counter, increaseCounter, decreaseCounter }) => {
  return (
    <div>
      <div className="mt-4 text-center text-4xl font-extrabold pb-6 text-cyan-600">
        {counter}
      </div>
      <div className="flex">
        <button
          onClick={increaseCounter}
          className="px-4 py-2 mx-6 border-2  border-green-400 text-green-600"
        >
          Increment
        </button>
        <button
          onClick={decreaseCounter}
          className="px-4 py-2 mx-6 border-2 border-red-400 text-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ThirdComponent;
