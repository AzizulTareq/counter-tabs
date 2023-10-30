import React, { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Component1 />;
      case 2:
        return <Component2 />;
      case 3:
        return <Component3 />;
      default:
        return null;
    }
  };

  const Component1 = () => <div className="p-4">Component 1</div>;
  const Component2 = () => <div className="p-4">Component 2</div>;
  const Component3 = () => <div className="p-4">Component 3</div>;

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => setActiveTab(1)}
          className={`py-2 px-6 ${
            activeTab === 1 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`py-2 px-6 ${
            activeTab === 2 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`py-2 px-6 ${
            activeTab === 3 ? "bg-rose-500" : "bg-rose-300"
          } text-white`}
        >
          Tab 3
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Home;
