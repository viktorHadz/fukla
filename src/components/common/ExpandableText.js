import React, { useState, useRef, useEffect } from 'react';

export const ExpandableText = ({
  children,
  className = '',
  buttonClass = '',
  previewLines = 3,
  expandedText = 'Show Less',
  collapsedText = 'Show More',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, children]);

  return (
    <div className='relative'>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${className}`}
        style={{
          height: isExpanded
            ? `${contentHeight}px`
            : `calc(${previewLines} * 1.5rem)`,
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
