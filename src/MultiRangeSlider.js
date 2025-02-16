import React, { useState, useEffect } from "react";

const MultiRangeSlider = ({ minPrice = 0, maxPrice = 400, onChange }) => {
  const [minRange, setMinRange] = useState(minPrice);
  const [maxRange, setMaxRange] = useState(maxPrice);
  const minGap = 10;

  const updateRange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);

    if (name === "min" && maxRange - numValue >= minGap) {
      setMinRange(numValue);
    } else if (name === "max" && numValue - minRange >= minGap) {
      setMaxRange(numValue);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange({ min: minRange, max: maxRange });
    }
  }, [minRange, maxRange, onChange]);

  return (
    <div className="slider-container">
      <div className="slider">
        <input
          type="range"
          name="min"
          min={minPrice}
          max={maxPrice}
          value={minRange}
          onChange={updateRange}
          className="min-range"
        />
        <input
          type="range"
          name="max"
          min={minPrice}
          max={maxPrice}
          value={maxRange}
          onChange={updateRange}
          className="max-range"
        />
        <div className="track">
          <div
            className="range-track"
            style={{
              left: `${(minRange / maxPrice) * 100}%`,
              right: `${100 - (maxRange / maxPrice) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="price-display">
        <span>Min: ${minRange}</span>
        <span>Max: ${maxRange}</span>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
