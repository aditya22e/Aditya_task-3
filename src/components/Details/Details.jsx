// src/components/Details.js
import React from 'react';
import './Details.css';

function Details() {
  return (
    <section className="details">
      <div>
        <h3>When & Where</h3>
        <p>May 7-8, 2025<br />GDP Headquarters</p>
      </div>
      <div>
        <h3>Prizes</h3>
        <p>$10,000+ in cash and tech goodies for all teams!
        </p>
      </div>
      <div>
        <h3>Themes</h3>
        <p>AI, Web3, Sustainability, Open Innovation</p>
      </div>
    </section>
  );
}

export default Details;