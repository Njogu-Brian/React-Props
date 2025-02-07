import React from "react";
import Links from "./Links"; // Import Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Only render <p> if bio exists */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
