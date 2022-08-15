import React, { useEffect } from "react";
import "../Stylesheets/circularprogressbar.css";

// Note : We can also use svg to make progressBars. I have used basic logic to keep the project simple

function CircularProgressBar({ progressPercent }) {
  let progressBar;
  let percentText;
  let progress = 0;

  useEffect(() => {
    progressBar = document.querySelector(
      //   `.outerCircle[data-percent=${progressPercent}]`
      `.outerCircle[data-percent='${progressPercent}']`
    );
    percentText = document.querySelector(
      //   `#number[data-percent=${progressPercent}]`
      `#number[data-percent='${progressPercent}']`
    );

    setupInterval();
  }, []);

  const setupInterval = () => {
    setInterval(() => {
      if (progress === progressPercent) {
        clearInterval();
      } else {
        progress++;
        progressBar.style.setProperty(
          "--progressPercent",
          `${progress * 3.6}deg`
        );
        percentText.innerHTML = `${progress}%`;
      }
    }, 40);
  };

  return (
    <div data-percent={progressPercent} className="outerCircle">
      <div className="innerCircle">
        <div data-percent={progressPercent} id="number"></div>
      </div>
    </div>
  );
}

export default CircularProgressBar;
