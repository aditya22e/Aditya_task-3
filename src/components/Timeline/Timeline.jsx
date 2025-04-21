// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

function Timeline() {
  const timelineEvents = [
    {
      time: 'May 7, 2025, 9:00 AM',
      title: 'Registration & Check-In',
      description: 'Arrive at GDP HeadQuarters, to check in and receive your participant kit.',
    },
    {
      time: 'May 7, 2025, 10:00 AM',
      title: 'Opening Ceremony & Kickoff',
      description: 'Welcome address, theme announcement, and official start of the 30-hour coding sprint.',
    },
    {
      time: 'May 7, 2025, 12:00 PM',
      title: 'Mentorship Sessions Begin',
      description: 'Connect with mentors for guidance on your project ideas and technical challenges.',
    },
    {
      time: 'May 7, 2025, 8:00 PM',
      title: 'Midpoint Check-In',
      description: 'Optional check-in to share progress and get feedback from organizers.',
    },
    {
      time: 'May 8, 2025, 12:00 PM',
      title: 'Project Submission Deadline',
      description: 'Submit your final project via the hackathon platform.',
    },
    {
      time: 'May 8, 2025, 1:00 PM',
      title: 'Judging & Demos',
      description: 'Present your project to judges and showcase your work to other participants.',
    },
    {
      time: 'May 8, 2025, 3:00 PM',
      title: 'Awards Ceremony',
      description: 'Winners announced, prizes awarded, and closing remarks.',
    },
    {
      time: 'May 8, 2025, 4:00 PM',
      title: 'Event Concludes',
      description: 'Networking session and farewell. See you next year!',
    },
  ];

  return (
    <section className="timeline">
      <h2>Hackathon Timeline</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-time">{event.time}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;