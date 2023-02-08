import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
            <span style={{"--value":days}}></span>
            </span>
            days
        </div> 
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
            <span style={{"--value":hours}}></span>
            </span>
            hours
        </div> 
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
            <span style={{"--value":minutes}}></span>
            </span>
            min
        </div> 
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
            <span style={{"--value":seconds}}></span>
            </span>
            sec
        </div>
        </div>
    {/* <p>
        Time left: {days}d {hours}h {minutes}m {seconds}s
      </p> */}
    </div>
    );
};

export default Countdown;
