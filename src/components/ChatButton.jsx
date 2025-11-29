import React from 'react';
import { Link } from 'react-router-dom';
import './ChatButton.css';

const ChatButton = () => {
  return (
    <Link 
      to="/contact" 
      className="chat-button"
      aria-label="Contact us"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </Link>
  );
};

export default ChatButton;

