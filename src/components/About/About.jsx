// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>Neon-Charged Innovation Awaits</h2>
      <p>
        <strong>DotCode 3.0</strong> is a 30-hour coding marathon where dreamers—whether you're a developer, designer, or 
        innovator—come together to build amazing solutions in a thrilling, futuristic setting. No matter if you're just 
        starting out, a tech veteran, or flying solo, this is your chance to make your mark. Tackle challenges in AI, Web3, 
        Sustainability, or Open Innovation, and earn your place among the best in the tech world!


      </p>
      <p>
        <strong>Prizes:</strong> Over $10,000 in cash and tech awaits! Special rewards include $1,000 for the Best Beginner Team, $1,500 for the Top All-Female Team, and $500 for the Ultimate Solo Participant. Plus, top teams unlock exclusive access to future tech events.
      </p>
      <p>
        Missed last year’s action? Dive into the archives of{' '}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="dotcode-link"
        >
          DotCode 2.0 (2024)
        </a>{' '}
        and see the legends who ruled the grid.
      </p>
    </section>
  );
}

export default About;