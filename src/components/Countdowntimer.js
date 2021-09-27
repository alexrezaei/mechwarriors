import React, { useState, useEffect } from "react";
import "./countdowntimer.css";

function Countdowntimer() {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`October 16 ${currentYear} 02:00:00`);
  useEffect(() => {
    let x = setInterval(function () {
      let currentTime = new Date();
      const diff = newYearTime - currentTime;
      let days = Math.floor(diff / 1000 / 60 / 60 / 24);
      let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(diff / 1000 / 60) % 60;
      let seconds = Math.floor(diff / 1000) % 60;
      setTime(days + "D " + hours + "H " + minutes + "M " + seconds + "S");
    }, 1000);
  });

  return (
    <div className="count-container">
      <p className="counter" id="days">
        {time}
      </p>
    </div>
  );
}

export default Countdowntimer;
