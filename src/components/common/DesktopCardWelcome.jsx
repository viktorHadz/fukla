import { ExpandableText } from './ExpandableText';

export const DesktopCard = ({
  title,
  content,
  imageUrl,
  bgClass,
  textColorClass,
  buttonClass,
  initialImagePosition = 'right', // 'right' or 'left'
  initialTextPosition = 'justify-start', // center, start or end
  idName,
  previewLines = 3,
  isExpanded,
  setIsExpanded,
  maxExpandedHeight = '300px',
}) => {
  return (
    <div
      id={idName || undefined}
      className='w-full sm:w-[80%] py-16 hidden sm:flex sm:flex-col items-center justify-self-center'
    >
      {/* Text and Image Container */}
      <div
        className={`relative flex items-center ${
          initialTextPosition || 'justify-start'
        }`}
      >
        {/* Text Section */}
        <div
          className={`relative z-10 w-[55%] ${bgClass} ${textColorClass} rounded-lg shadow-xl p-6 sm:p-8 card-center`}
          style={{
            minHeight: '250px',
          }}
        >
          <h2 className='mb-4 text-xl font-semibold sm:2xl lg:text-3xl'>
            {title}
          </h2>
          <ExpandableText
            className='block mb-4 text-lg'
            previewLines={previewLines}
            buttonClass={buttonClass}
            expandedText='Виж по-малко'
            collapsedText='Виж повече'
            isExpanded={isExpanded}
            onToggle={(state) => setIsExpanded(state)}
            maxExpandedHeight={maxExpandedHeight}
          >
            {content}
          </ExpandableText>
        </div>
        {/* Image Section */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 rounded-lg shadow-xl z-0 transition-all duration-500`}
          style={{
            [initialImagePosition]: isExpanded ? '0%' : '15%',
            height: isExpanded ? '110%' : '80%',
            width: '40%',
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export const DesktopCardSplit = ({
  leftTitle,
  leftContent,
  leftImageUrl,
  rightTitle,
  rightContent,
  rightImageUrl,
  leftBgClass,
  rightBgClass,
  leftTextColorClass,
  rightTextColorClass,
  previewLines = 4,
  isExpanded,
  leftIsHidden,
  rightIsHidden,
  maxExpandedHeight = '200px',
}) => {
  return (
    <div className='hidden sm:grid grid-cols-1 lg:grid-cols-2 w-full max-w-[80%] justify-self-center pb-16 pt-8 gap-16'>
      {/* Left Column */}
      <div className={`flex-col hidden sm:flex ${leftIsHidden}`}>
        {/* Text Container */}
        <div
          className={`w-full p-4 text-center rounded-lg shadow-xl ${leftBgClass} ${leftTextColorClass} card-left`}
        >
          <h2 className='mb-4 text-2xl font-semibold lg:text-3xl'>
            {leftTitle}
          </h2>
          <ExpandableText
            className='block mb-4 text-lg'
            previewLines={previewLines}
            buttonClass='hidden' // Hide the button here
            expandedText='Виж по-малко'
            collapsedText='Виж повече'
            isExpanded={isExpanded}
            maxExpandedHeight={maxExpandedHeight}
          >
            {leftContent}
          </ExpandableText>
        </div>
        {/* Image Container */}
        <div
          className={`w-full rounded-md shadow-xl bg-cover bg-center transition-all duration-500 mt-4 overflow-hidden`}
          style={{
            height: isExpanded ? '11rem' : '0',
            backgroundImage: `url('${leftImageUrl}')`,
          }}
        ></div>
      </div>
      {/* Right Column */}
      <div
        className={`relative items-center justify-end hidden sm:flex ${rightIsHidden}`}
      >
        {/* Content Container */}
        <div className='relative flex justify-end w-full'>
          {/* Text Section */}
          <div
            className={`relative z-10 w-2/3 p-6 rounded-lg shadow-xl ${rightBgClass} ${rightTextColorClass} card-right`}
            style={{ minHeight: '300px' }}
          >
            <h2 className='mb-4 text-xl font-semibold lg:text-3xl'>
              {rightTitle}
            </h2>
            <ExpandableText
              className='block my-4 text-lg'
              previewLines={previewLines}
              buttonClass='hidden' // No button here
              expandedText='Виж по-малко'
              collapsedText='Виж повече'
              isExpanded={isExpanded}
              maxExpandedHeight={maxExpandedHeight}
            >
              {rightContent}
            </ExpandableText>
          </div>
          {/* Image Section */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 w-1/2 bg-cover bg-center rounded-lg shadow-xl z-0 transition-all duration-500`}
            style={{
              left: isExpanded ? '0%' : '10%',
              height: isExpanded ? '90%' : '60%',
              backgroundImage: `url('${rightImageUrl}')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
