import React from "react";
import "../styles/About.css";

const teamInfo = [
  {
    title: "Dylan Ricci",
    description:
      "Umass Dartmouth Graduate (BS 2025)\nLead developer on this project\nEmail: dylanricci55@gmail.com",
  },
  {
    title: "Nerd #2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\nNisi voluptates eos quia laboriosam voluptatem magnam iure natus a.",
  },
  {
    title: "Nerd #3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\nNisi voluptates eos quia laboriosam voluptatem magnam iure natus a.",
      
  },
  
];

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      {teamInfo.map((item, index) => (
        <div key={index} className="about-box">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
