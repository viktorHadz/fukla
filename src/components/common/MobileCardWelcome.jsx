import { useState } from 'react';
import { ExpandableTextMobile } from './ExpandableText';

export const MobileCard = ({
  title,
  content,
  imageUrl,
  bgClass,
  idName,
  textClass,
  titleClass,
  buttonClass,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='p-4 text-white rounded-md'>
      {/* Text */}
      <div
        className={`w-full p-4 rounded-lg shadow-xl text-center ${
          bgClass || 'bg-zinc-900'
        }`}
        id={idName || undefined}
      >
        <h2 className={`mb-4 text-xl font-semibold ${titleClass}`}>{title}</h2>
        <ExpandableTextMobile
          className={`block mb-4 text-sm text-gray-300 ${textClass}`}
          previewLines={2}
          buttonClass={`mt-4 p-2 text-sm rounded-lg site-button`}
          expandedText='Виж по-малко'
          collapsedText='Виж повече'
          onToggle={(state) => setIsExpanded(state)}
        >
          {content}
        </ExpandableTextMobile>
      </div>

      {/* Image */}
      <div
        className={`w-full mt-4 rounded-lg shadow-xl transition-all duration-500 overflow-hidden ${
          isExpanded ? 'h-60 opacity-100' : 'h-0 opacity-0'
        } ${buttonClass}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};
