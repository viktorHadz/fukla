import { scrollToElement } from '../../common/scrollToElement';

export const ExtensionsBanner = () => {
  const handleScroll = () => {
    const desktop = document.getElementById('take-a-look-desktop');
    const mobile = document.getElementById('take-look');

    if (desktop && desktop.offsetParent !== null) {
      scrollToElement('take-a-look-desktop');
    } else if (mobile && mobile.offsetParent !== null) {
      scrollToElement('take-look');
    } else {
      console.error('No visible element to scroll to');
    }
  };

  return (
    <div className='w-full h-[500px] lg:h-[600px] bg-dark-gradient relative overflow-hidden mt-20 cursor-default flex items-center justify-center'>
      {/* Background Image */}
      <div
        className='absolute top-0 flex w-[50%] md:w-[30%] h-full mb-10 bg-center'
        style={{
          backgroundImage: `url('/images/extensions/blondeBanner.webp')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: '50%',
          loading: 'eager',
        }}
      >
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: 'rgba(255,25,71, 0.3)', // Pink overlay with 40% opacity
            pointerEvents: 'none',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center px-4 text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-white uppercase sm:text-6xl'>
          синтетични опашки
        </h1>
        <p className='mt-6 text-lg leading-8 text-white uppercase'>
          бъди ярка бъди впечатляваща
        </p>
        <button
          className='my-8 text-xs site-button-alt xs:text-sm md:text-base lg:text-lg'
          onClick={handleScroll}
        >
          РАЗГЛЕДАЙ
        </button>
      </div>
    </div>
  );
};
