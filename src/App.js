import React, { useState } from "react";
import "./App.css";
import meAndGoofy from "./MeAndGoofy.JPG";

function App() {
  const [lightMode, setLightMode] = useState("light");

  return (
    <div className={lightMode}>
      <button onClick={() => setLightMode("dark")}>Dark Mode</button>
      <button onClick={() => setLightMode("light")}>Light Mode</button>
      <div className="opening">
        <h1 className="center">Victoria "Vicki" Tiller</h1>
        <h2 className="center">Front-End Software Engineer</h2>
        <h4 className="center">and Leonardo da Vinci Enthusiast</h4>
      </div>
      <div className="about">
        <div className="bio">
          <p>
            I moved to Japan in 2016 to teach English, but five years and one
            pandemic later I decide to return to the United States. Since
            returning, I’ve pivoted into a career in web development. I am a
            fullstack engineer with more experience in the front-end. Most
            recently I’ve been working in Typescript and Angular with occasional
            Ruby (and Rails), but in the past I’ve worked with React and C#. I’m
            a quick learner and have adapted to many environments, both here and
            abroad. I am passionate about learning new skills and sharing
            knowledge.
          </p>
        </div>
        <img src={meAndGoofy} alt="Vicki and Goofy at Hollywood Studios" />
      </div>
      <body>
        <br />
        <div className="portfolio">
          <h3 className="center">Portfolio</h3>
          <ul>
            <li>
              <h5>
                <a href="https://gayoldtime-86967cd3285d.herokuapp.com/">
                  Gay Old Time
                </a>
              </h5>
              <p>
                WIP Wiki about LGBT historical figures made in Ruby on Rails.
                Github repo{" "}
                <a href="https://github.com/vickiticki/gayoldtimeror">here</a>.
              </p>
            </li>
            <li>
              <h5>
                <a href="https://color-picker-hooks-victoriatiller.netlify.app/">
                  Color Picker
                </a>
              </h5>
              <p>
                A colorpicker made with Javascript and React. Github repo{" "}
                <a
                  href="https://github.com/vickiticki/color-picker-hooks"
                  class=""
                >
                  here
                </a>
                .
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h5>
                <a href="https://react-calculator-victoriatiller.netlify.app/">
                  Calculator
                </a>
              </h5>
              <p>
                A calculator made using Javascript and React. Github repo{" "}
                <a href="https://github.com/vickiticki/react-calculator">
                  here
                </a>
                .
              </p>
            </li>
            <li>
              <h5>
                <a href="https://scoreboard-victoriatiller.netlify.app/">
                  Scoreboard
                </a>
              </h5>
              <p>
                A simple volleyball scoreboard. Github repo{" "}
                <a href="https://github.com/vickiticki/scoreboard">here</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3 class="center">Find Me:</h3>
          <div class="links">
            <a href="https://github.com/vickiticki" class="center">
              Github
            </a>
            <a href="https://www.linkedin.com/in/vjtiller/" class="center">
              LinkedIn
            </a>
            <a href="mailto: vijotiller@gmail.com" class="center">
              Email
            </a>
          </div>
        </div>
        <div class="contact">
          <h3 class="center">More links:</h3>
          <div class="links">
            <a href="resume.pdf" target="_blank" class="center">
              Resume
            </a>
            <a href="https://www.youtube.com/@vickitiller900" class="center">
              YouTube
            </a>
          </div>
        </div>
        <h2 className="goodbye center">Thank you for visiting!</h2>
      </body>
    </div>
  );
}

export default App;
