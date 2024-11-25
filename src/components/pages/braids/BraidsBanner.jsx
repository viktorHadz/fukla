import { scrollToElement } from '../../common/scrollToElement';

export const BraidsBanner = () => {
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
    <div className='w-full h-[400px] lg:h-[500px] bg-dark-gradient relative overflow-hidden mt-20 cursor-default flex items-center justify-center'>
      {/* Background Image */}
      <div
        className='absolute top-0 flex w-[30%] h-full mb-10 bg-center'
        style={{
          backgroundImage: `url('images/home/braid-thread.webp')`,
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
        <h1 className='text-3xl font-medium tracking-widest text-white uppercase md:text-4xl lg:text-5xl'>
          ПЛИТКИ
        </h1>
        <p className='mt-4 text-lg tracking-widest text-white md:text-xl lg:text-2xl'>
          БЪДИ СТИЛНА БЪДИ НЕПОВТОРИМА
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
