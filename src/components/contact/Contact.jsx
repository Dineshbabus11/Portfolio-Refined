import React from 'react';
import './Contact.scss';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code'; // for LeetCode

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <h3>Let’s Connect</h3>
        <p>
          I’d love to hear from you! Whether you have a question, a project, or just want to say hi —
          feel free to reach out.
        </p>

        <div className="contact-details">
          <div className="personal-detail">
            <FmdGoodIcon className="icon" />
            <span>Coimbatore, India</span>
          </div>

          <div className="personal-detail">
            <CallIcon className="icon" />
            <a href="tel:+918248944055">+91 82489 44055</a>
          </div>

          <div className="personal-detail">
            <EmailIcon className="icon" />
            <a href="mailto:msgtodineshbabus@gmail.com">msgtodineshbabus@gmail.com</a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/dinesh-babu-s/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="social-icon" />
          </a>
          <a href="https://github.com/Dineshbabus11" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="social-icon" />
          </a>
          <a href="https://linktr.ee/DineshBabuS11" target="_blank" rel="noopener noreferrer">
            <LinkIcon className="social-icon" />
          </a>
          <a href="https://leetcode.com/u/DineshBabuS11" target="_blank" rel="noopener noreferrer">
            <CodeIcon className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
