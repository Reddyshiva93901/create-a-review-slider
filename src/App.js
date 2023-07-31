import React, { useState } from "react";
import "./App.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Pellentesque euismod augue eu odio consectetur, nec feugiat urna semper.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    text: "Fusce venenatis, libero nec luctus interdum, metus nisl vehicula dolor.",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <h1>Review Slider</h1>
      <div className="Slider">
        <button onClick={prevReview}>&#8249;</button>
        <div className="Review">
          <h2>{reviews[activeIndex].name}</h2>
          <p>{reviews[activeIndex].text}</p>
        </div>
        <button onClick={nextReview}>&#8250;</button>
      </div>
    </div>
  );
};

export default App;
