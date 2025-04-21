// src/components/Sponsors.js
import React from 'react';
import './Sponsors.css';

function Sponsors() {
  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        <img src="https://assets.aboutamazon.com/dims4/default/dd7f211/2147483647/strip/false/crop/960x720+0+0/resize/960x720!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F66%2Ff3%2Fcb7e8e804a1f991c96593cf465e1%2Faws-logo-white-on-si.jpg" alt="Sponsor 1" />
        <img src="https://pbs.twimg.com/profile_images/1854967586674425856/KtgsHH0u_400x400.jpg" alt="Sponsor 2" />
        <img src="https://avatars.githubusercontent.com/u/5155369?s=200&v=4" alt="Sponsor 3" />
      </div>
    </section>
  );
}

export default Sponsors;