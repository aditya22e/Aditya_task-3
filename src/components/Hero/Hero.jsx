import React, { useState, useEffect } from 'react';
import './Hero.css';


function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('May 7, 2025 09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); 
    const timer = setInterval(updateTimer, 1000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <section className="hero" style={{backgroundImage: "URL(/hero1.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <h1>DotCode 3.0</h1>
      <p>Dive into the ultimate coding battle! Create groundbreaking solutions and claim epic prizes!</p>
      <p><strong>Date:</strong> May 7-8, 2025 | <strong>Location:</strong> GDP HeadQuarters</p>
      <div className="countdown">
        <h2>Wait For DotCode</h2>
        <div className="countdown-timer">
          <div className="time-block">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time-block">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-block">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-block">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
      <a href="" className="cta-button">Register Now</a>
    </section>
  );
}

export default Hero;
