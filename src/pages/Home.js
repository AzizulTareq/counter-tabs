import React, { useState, useEffect } from "react";
import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";
import {
  getCounterFromLocalStorage,
  setCounterToLocalStorage,
} from "../utils/localStorage";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [counter, setCounter] = useState(getCounterFromLocalStorage);
  useEffect(() => {
    setCounterToLocalStorage(counter);
  }, [counter]);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <FirstComponent
            counter={counter}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
          />
        );
      case 2:
        return (
          <SecondComponent
            counter={counter}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
          />
        );
      case 3:
        return (
          <ThirdComponent
            counter={counter}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setActiveTab(1)}
          className={`py-2 px-6 ${
            activeTab === 1 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          First
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`py-2 px-6 ${
            activeTab === 2 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          Second
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`py-2 px-6 ${
            activeTab === 3 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          Third
        </button>
      </div>
      <div className="flex justify-center my-4">{renderTabContent()}</div>
    </div>
  );
};

export default Home;
