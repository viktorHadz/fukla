import React, { useRef, useState, useEffect } from 'react';

export const ExpandableText = ({
  children,
  previewLines,
  className,
  buttonClass,
  expandedText,
  collapsedText,
  isExpanded,
  onToggle,
  maxExpandedHeight,
}) => {
  const [maxHeight, setMaxHeight] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const computedStyle = getComputedStyle(contentRef.current);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      if (isExpanded) {
        setMaxHeight(
          maxExpandedHeight || `${contentRef.current.scrollHeight}px`
        );
      } else {
        const previewHeight = previewLines * lineHeight;
        setMaxHeight(`${previewHeight}px`);
      }
    }
  }, [isExpanded, previewLines, maxExpandedHeight]);

  return (
    <div className={className}>
      <div
        ref={contentRef}
        className={`expandable-text-content ${
          isExpanded ? 'overflow-y-scroll' : 'overflow-hidden'
        }`}
        style={{
          maxHeight: maxHeight,
          transition: 'max-height 0.5s ease',
        }}
      >
        {children}
      </div>
      <button className={buttonClass} onClick={() => onToggle(!isExpanded)}>
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
          maxHeight: isExpanded ? '120px' : previewHeight,
        }}
      >
        {children}
      </div>
      <button onClick={toggleExpanded} className={`${buttonClass}`}>
        {isExpanded ? expandedText : collapsedText}
      </button>
    </div>
  );
};
