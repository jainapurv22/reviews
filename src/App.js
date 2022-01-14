import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [index, setindex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const surprise = () => {
    let new_index = Math.floor(Math.random() * reviews.length);
    if (new_index === index) {
      new_index = index + 1;
    }
    if (new_index === reviews.length) new_index = 0;
    setindex(new_index);
  };

  return (
    <div className="App">
      <h1 className="head">Our Reviews</h1>
      <div className="line"></div>
      <div className="info">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <span>{job}</span>
        <p>{text}</p>
        <div className="btn-container">
          <div
            className="prev-btn"
            onClick={() => {
              setindex((index) => {
                if (index === 0) return reviews.length - 1;
                else return index - 1;
              });
            }}
          >
            <FaChevronLeft />
          </div>
          <div
            className="next-btn"
            onClick={() => {
              setindex((index) => {
                if (index === reviews.length - 1) return 0;
                else return index + 1;
              });
            }}
          >
            <FaChevronRight />
          </div>
        </div>
        <button
          onClick={() => {
            surprise();
          }}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default App;
