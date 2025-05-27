import React from "react";
import "../styles/About.css";

const teamInfo = [
  {
    title: "",
    description:
      "This is a skills show off page for several Umass Dartmouth Graduates.\nFeel free to look around!",
  },
  
];

export default function About() {
  return (
    <div className="about-container">
      <h1>Welcome!</h1>
      {teamInfo.map((item, index) => (
        <div key={index} className="about-box">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
