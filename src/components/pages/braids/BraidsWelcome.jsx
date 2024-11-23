import { useState } from 'react';
import { ExpandableText } from '../../common/ExpandableText';
import { ExpandableTextMobile } from '../../common/ExpandableText';

export const BraidsWelcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLowerExpanded, setIsLowerExpanded] = useState(false);
  const [isSideSmallExpanded, setIsSideSmallExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isLowerMobileExpanded, setIsMobileLowerExpanded] = useState(false);

  return (
    <>
      {/* Mobile Layout sm:hidden */}
      <div className='flex flex-col w-full gap-4 sm:hidden'>
        {/* Box 1 */}
        <div className='p-4 text-white rounded-md'>
          {/* Text */}
          <div className='w-full p-4 bg-[#18181b] rounded-lg shadow-md text-center'>
            <h2 className='mb-4 text-xl font-semibold'>
              Плитката като универсален стил
            </h2>
            <ExpandableTextMobile
              className='block mb-4 text-sm text-gray-300'
              previewLines={2.5}
              buttonClass='mt-4 p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'
              expandedText='Виж по-малко'
              collapsedText='Виж повече'
              onToggle={(state) => setIsMobileExpanded(state)}
            >
              Плитките не са просто практично решение за премахване на косата от
              лицето ви – те са начин да изразите стил и увереност. С тях
              печелите време за важните неща, като едновременно постигате
              мечтаната визия и дълга коса. Те безпроблемно преминават от
              ежедневна небрежност към подчертана елегантност, допълвайки и
              най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
              косите и подчертават вашата естествена усмивка.
              <br />
              <span className='text-gray-200'>
                Оставете плитките да говорят за вашия стил!
              </span>
            </ExpandableTextMobile>
          </div>

          {/* Image */}
          <div
            className={`w-full mt-4 rounded-lg shadow-md transition-all duration-500 overflow-hidden ${
              isMobileExpanded ? 'h-60' : 'h-0'
            }`}
            style={{
              backgroundImage: "url('images/braids/braidsSwiper4.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Box 2 */}
        <div className='p-4 text-white rounded-md'>
          {/* Text */}
          <div className='w-full p-4 bg-[#18181b] rounded-lg shadow-md text-center'>
            <h2 className='mb-4 text-xl font-semibold'>
              Плитката като универсален стил
            </h2>
            <ExpandableTextMobile
              className='block mb-4 text-sm text-gray-300'
              previewLines={2.5}
              buttonClass='mt-4 p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'
              expandedText='Виж по-малко'
              collapsedText='Виж повече'
              onToggle={(state) => setIsMobileLowerExpanded(state)}
            >
              Плитките не са просто практично решение за премахване на косата от
              лицето ви – те са начин да изразите стил и увереност. С тях
              печелите време за важните неща, като едновременно постигате
              мечтаната визия и дълга коса. Те безпроблемно преминават от
              ежедневна небрежност към подчертана елегантност, допълвайки и
              най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
              косите и подчертават вашата естествена усмивка.
              <br />
              <span className='text-gray-200'>
                Оставете плитките да говорят за вашия стил!
              </span>
            </ExpandableTextMobile>
          </div>

          {/* Image */}
          <div
            className={`w-full mt-4 rounded-lg shadow-md transition-all duration-500 overflow-hidden ${
              isLowerMobileExpanded ? 'h-60' : 'h-0'
            }`}
            style={{
              backgroundImage: "url('images/braids/braidsSwiper4.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      {/* MARK: Desktop Box 1 */}
      <div className='w-full sm:w-[80%] pt-16 hidden sm:flex sm:flex-col items-center justify-self-center'>
        {/* Text and Image Container 1*/}
        <div className='relative flex items-center justify-start'>
          {/* Text Section */}
          <div
            className='relative z-10 w-[60%] bg-zinc-900 text-white rounded-lg shadow-lg p-2 sm:p-6 welcome-card-scroll'
            style={{
              minHeight: '250px',
            }}
          >
            <h2 className='mb-4 text-xl font-semibold sm:2xl lg:text-3xl'>
              Плитката като универсален стил
            </h2>
            <ExpandableText
              className='block mb-4 text-lg text-gray-300'
              previewLines={4}
              buttonClass='mt-4 p-2 text-sm sm:text-lg bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'
              expandedText='Виж по-малко'
              collapsedText='Виж повече'
              onToggle={(state) => setIsExpanded(state)}
            >
              Плитките не са просто практично решение за премахване на косата от
              лицето ви – те са начин да изразите стил и увереност. С тях
              печелите време за важните неща, като едновременно постигате
              мечтаната визия и дълга коса. Те безпроблемно преминават от
              ежедневна небрежност към подчертана елегантност, допълвайки и
              най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
              косите и подчертават вашата естествена усмивка.
              <br />
              <span className='text-gray-200'>
                Оставете плитките да говорят за вашия стил!
              </span>
            </ExpandableText>
          </div>
          {/* Image Section (behind and Right) */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 rounded-lg shadow-md z-0 transition-all duration-500`}
            style={{
              right: isExpanded
                ? '-4%' // Expanded position
                : '10%', // Initial position
              height: isExpanded ? '110%' : '80%',
              width: '40%', // Static width
              backgroundImage: "url('images/braids/braidsSwiper4.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      {/* MARK: GRID LAYOUT */}
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full max-w-[80%] justify-self-center pb-16 pt-8 gap-16'>
         {/* MARK: Column 1 - Desktop Layout */}
      <div className='flex-col hidden lg:flex'>
        {/* Text Container */}
        <div className='w-full p-4 bg-[#18181b] text-white rounded-lg shadow-md text-center'>
          <h2 className='mb-4 text-xl font-semibold'>
            Плитката като универсален стил
          </h2>
          <ExpandableText
            className='block mb-4 text-lg text-gray-300'
            previewLines={3}
            buttonClass='px-4 py-2 text-sm sm:text-lg bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'
            expandedText='Виж по-малко'
            collapsedText='Виж повече'
            onToggle={(state) => setIsSideSmallExpanded(state)}
          >
            Плитките не са просто практично решение за премахване на косата от
            лицето ви – те са начин да изразите стил и увереност. С тях
            печелите време за важните неща, като едновременно постигате
            мечтаната визия и дълга коса. Те безпроблемно преминават от
            ежедневна небрежност към подчертана елегантност, допълвайки и
            най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
            косите и подчертават вашата естествена усмивка.
            <br />
            <span className='text-gray-200'>
              Оставете плитките да говорят за вашия стил!
            </span>
          </ExpandableText>
        </div>

        {/* Image Container */}
        <div
          className={`w-full rounded-md shadow-md bg-cover bg-center transition-all duration-500 mt-4 overflow-hidden`}
          style={{
            height: isSideSmallExpanded ? '11rem' : '0',
            backgroundImage: "url('images/braids/braidsSwiper4.webp')",
          }}
        ></div>
      </div>

        {/* MARK: Column 2 */}
        <div className='relative items-center justify-end hidden sm:flex'>
          {/* Content Container */}
          <div className='relative flex justify-end w-full'>
            {/* Text Section */}
            <div
              className='relative z-10 w-1/2 p-4 sm:p-6 bg-[#18181b] text-white rounded-lg shadow-lg'
              style={{ minHeight: '250px' }}
            >
              <h2 className='mb-4 text-xl font-semibold sm:text-2xl lg:text-3xl'>
                Плитката като универсален стил
              </h2>
              <ExpandableText
                className='block mb-4 text-lg text-gray-300'
                previewLines={3}
                buttonClass='px-4 py-2 text-sm sm:text-lg bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'
                expandedText='Виж по-малко'
                collapsedText='Виж повече'
                onToggle={(state) => setIsLowerExpanded(state)}
              >
                Плитките не са просто практично решение за премахване на косата
                от лицето ви – те са начин да изразите стил и увереност. С тях
                печелите време за важните неща, като едновременно постигате
                мечтаната визия и дълга коса. Те безпроблемно преминават от
                ежедневна небрежност към подчертана елегантност, допълвайки и
                най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
                косите и подчертават вашата естествена усмивка.
                <br />
                <span className='text-gray-200'>
                  Оставете плитките да говорят за вашия стил!
                </span>
              </ExpandableText>
            </div>
            {/* Image Section */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-1/2 h-4/5 bg-cover bg-center rounded-lg shadow-md z-0 transition-all duration-500`}
              style={{
                left: isLowerExpanded ? '0%' : '10%',
                height: isLowerExpanded ? '90%' : '60%',
                backgroundImage: "url('images/braids/braidsSwiper4.webp')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
