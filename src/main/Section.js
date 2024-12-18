import React from "react";
import "./Section.css";

const Section = ({ title, items }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-items">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <p className="card-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
