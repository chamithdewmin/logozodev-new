import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VerifiedIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import './TwitterCard.css';

const TwitterCard = ({
  authorName = 'LogozoDev',
  authorImage = 'https://logozodev.com/invoice-demo3/assets/logozodev.png',
  content = [],
  isVerified = true,
  reply,
  serviceData,
  onReplyClick,
}) => {
  const navigate = useNavigate();
  // Use service data if provided, otherwise use default content
  const displayContent = serviceData
    ? [
        serviceData.description
      ]
    : content.length > 0
    ? content
    : [
        'LogozoDev is the best digital agency partner 🎉',
        '1. Expert Team',
        '2. Innovative Solutions',
        '3. Proven Results',
      ];

  return (
    <div className="twitter-card-wrapper">
      <div className="twitter-card">
        <div className="twitter-card-inner">
          <div className="twitter-card-header">
            <div className="twitter-card-avatar">
              {serviceData?.icon ? (
                React.createElement(serviceData.icon, { 
                  className: "twitter-card-avatar-icon", 
                  size: 24 
                })
              ) : (
                <img
                  src={authorImage}
                  alt={authorName}
                  className="twitter-card-avatar-img"
                />
              )}
            </div>
            <div className="twitter-card-user-info">
              <div className="twitter-card-user-header">
                <div className="twitter-card-user-names">
                  <span className="twitter-card-author-name">
                    {serviceData ? serviceData.title : authorName}
                  </span>
                </div>
                <button
                  type="button"
                  className="twitter-card-x-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1200"
                    height="1227"
                    fill="none"
                    viewBox="0 0 1200 1227"
                    className="twitter-card-x-icon"
                  >
                  </svg>
                </button>
              </div>
              {serviceData?.headline && (
                <div className="twitter-card-headline">
                  <span className="twitter-card-headline-text">{serviceData.headline}</span>
                </div>
              )}
            </div>
          </div>

          <div className="twitter-card-content">
            {displayContent.map((item, index) => (
              <p key={index} className="twitter-card-text">
                {item}
              </p>
            ))}
          </div>

          {reply && (
            <div 
              className="twitter-card-reply"
              onClick={() => {
                if (onReplyClick) {
                  onReplyClick();
                } else if (reply.content.includes('Learn More')) {
                  navigate('/services');
                }
              }}
              style={{ cursor: reply.content.includes('Learn More') ? 'pointer' : 'default' }}
            >
              <div className="twitter-card-reply-header">
                <div className="twitter-card-avatar twitter-card-reply-avatar">
                  <img
                    src={reply.authorImage}
                    alt={reply.authorName}
                    className="twitter-card-avatar-img"
                  />
                </div>
                <div className="twitter-card-reply-info">
                  <div className="twitter-card-reply-names">
                    <span className="twitter-card-author-name">
                      {reply.authorName}
                    </span>
                    {reply.isVerified && (
                      <VerifiedIcon className="twitter-card-verified-icon" />
                    )}
                    <span className="twitter-card-author-handle">
                      @{reply.authorHandle}
                    </span>
                    <span className="twitter-card-separator">·</span>
                    <span className="twitter-card-timestamp">
                      {reply.timestamp}
                    </span>
                  </div>
                  <p className="twitter-card-reply-text">
                    {reply.content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;

