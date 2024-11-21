import React, { useState } from 'react';

export const ExpandableText = ({
  children,
  className = '',
  buttonClass = '',
  previewLines = 3,
  expandedText = 'Show Less',
  collapsedText = 'Show More',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate the preview height based on line count
  const previewHeight = `calc(${previewLines} * 1.5rem)`; // Adjust based on your text line-height

  return (
    <div className={`relative ${className}`}>
      <div
        className={`transition-all duration-300 ${
          isExpanded ? 'overflow-y-scroll' : 'overflow-hidden'
        }`}
        style={{
          maxHeight: isExpanded ? '270px' : previewHeight,

        }}
      >
        {children}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-2 ${buttonClass}`}
      >
        {isExpanded ? expandedText : collapsedText}
      </button>
    </div>
  );
};
