import React from 'react';
import LinkPreviewer from './LinkPreviewer';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Check My Projects</h1>

      <div className="project-item" id="weather">
        <h2>🌦️ Weather App</h2>
        <p>
          • Built using <strong>React</strong> with dynamic API data fetching<br/>
          • Displays real-time weather information for any city<br/>
          • Clean and responsive UI with asynchronous requests
        </p>
        <LinkPreviewer url="https://sid2005-ui.github.io/weather/">
          <span className="link">Try It Out</span>
        </LinkPreviewer>
      </div>

      <div className="project-item" id="typing">
        <h2>⌨️ Typing Master</h2>
        <p>
          • Developed using <strong>JavaScript</strong> <br />
          • Tracks typing speed and accuracy with live feedback<br />
          • Lightweight interface designed for fast performance
        </p>
        <LinkPreviewer url="https://sid2005-ui.github.io/test/">
          <span className="link">Start Typing</span>
        </LinkPreviewer>
      </div>

      <div className="project-item" id="bmi">
        <h2>⚖️ BMI Calculator</h2>
        <p>
          • Created using <strong>React</strong> for an interactive experience<br/>
          • Calculates Body Mass Index instantly based on user input<br/>
          • Validates data and provides results on mobile-friendly layout
        </p>
        <LinkPreviewer url="https://sid2005-ui.github.io/bmi-calc/">
          <span className="link">Calculate Yours</span>
        </LinkPreviewer>
      </div>
    </div>
  );
}

export default App;