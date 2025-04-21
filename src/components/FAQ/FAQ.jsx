// src/components/FAQ.js
import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>Who can participate?</summary>
        <p>Anyone with an interest in coding, design, or tech. Teams of up to 4 members are allowed.</p>
      </details>
      <details>
        <summary>Do I need prior experience?</summary>
        <p>No! DotCode welcomes beginners and experts alike.</p>
      </details>
      <details>
        <summary>Will there be any elimination in between?</summary>
        <p>No, it's a one in go hackathon but if you leave the venue is between then you'll be disqualified.</p>
      </details>
      <details>
        <summary>How do I register?</summary>
        <p>Click the "Register Now" button and fill out the form. Registration closes May 1, 2025.</p>
      </details>
      <details>
        <summary>Can I participate solo?</summary>
        <p>Yes! there's also an seperate award for solo competitors.</p>
      </details>
    </section>
  );
}

export default FAQ;