import React from "react";
import "../scss/card.scss";
const Card = () => {
  return (
    <div className="card">
      <h5>Card Title</h5>
      <p> the description </p>
      <select name="" id="">
        {Array.from(Array(6), (e, i) => {
          return (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <select>
        <option value="Half">Half</option>
        <option value="Full">Full</option>
      </select>
    </div>
  );
};

export default Card;
