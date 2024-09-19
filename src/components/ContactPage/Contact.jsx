import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section>
        <div className="contact-container">
          <div className="content-box">
            <h1>Looking for a Job</h1>
            <p>I am actively looking for job opportunities in software development. With my background in full-stack development and a degree in Computer Science and Business Computing, I am ready to take on new challenges and make a difference in the tech world. You can reach me via:</p>
            <ul>
              <li><a href="mailto:ntando.personal@gmail.com">Email: ntando.personal@gmail.com</a></li>
              <li><a href="https://linkedin.com/in/ntandoyabalele-mngomezulu-1434a2234" target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/ntandoyabalele-mngomezulu-1434a2234</a></li>
              <li><a href="https://github.com/NtandoMgo" target="_blank" rel="noopener noreferrer">GitHub: https://github.com/NtandoMgo</a></li>
            </ul>
            <p>Feel free to reach out if you have any openings or know of opportunities where my skills can be a good fit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
