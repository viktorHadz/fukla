import React, { useState } from 'react';

export const ExpandableText = ({
  children,
  className = '',
  buttonClass = '',
  previewLines = 3,
  expandedText = 'Show Less',
  collapsedText = 'Show More',
  onToggle = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate the preview height ( previewLines * x )
  const previewHeight = `calc(${previewLines} * 1.5rem)`;

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle(newState); 
  };
  return (
    <div className={`relative ${className}`}>
      <div
        className={`transition-all duration-300 expandable-text-content ${
          isExpanded ? 'overflow-y-scroll' : 'overflow-hidden'
        }`}
        
        style={{
          maxHeight: isExpanded ? '270px' : previewHeight,
        }}
      >
        {children}
      </div>
      <button
        onClick={toggleExpanded}
        className={`${buttonClass}`}
      >
        {isExpanded ? expandedText : collapsedText}
      </button>
    </div>
  );
};

export const ExpandableTextMobile = ({
  children,
  className = '',
  buttonClass = '',
  previewLines = 3,
  expandedText = 'Show Less',
  collapsedText = 'Show More',
  onToggle = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate the preview height ( previewLines * x )
  const previewHeight = `calc(${previewLines} * 1.5rem)`;

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle(newState); 
  };
  return (
    <div className={`relative ${className}`}>
      <div
        className={`transition-all duration-300 expandable-text-content ${
          isExpanded ? 'overflow-y-scroll' : 'overflow-hidden'
        }`}
        
        style={{
          maxHeight: isExpanded ? '180px' : previewHeight,
        }}
      >
        {children}
      </div>
      <button
        onClick={toggleExpanded}
        className={`${buttonClass}`}
      >
        {isExpanded ? expandedText : collapsedText}
      </button>
    </div>
  );
};
