import { scrollToElement } from '../../common/scrollToElement';

export const BraidsBanner = () => {
  const handleScroll = () => {
    scrollToElement('braids-welcome');
  };
  return (
    <div className='w-full h-[500px] lg:h-[600px] xl:h-[700px] bg-zinc-950 relative overflow-hidden mt-20 cursor-default'>
      {/* Full-height centered image */}
      <div
        className='absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] sm:w-[25%] bg-cover bg-center'
        style={{
          backgroundImage: `url('images/home/braid-thread.webp')`,
          opacity: '60%',
        }}
      >
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: 'rgba(255,25,71, 0.4)', // Pink color with 40% opacity
            pointerEvents: 'none', // Ensures this layer does not interfere with interactions
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className='relative z-10 grid h-full grid-cols-3 sm:grid-cols-5 '>
        {/* Left Logo */}
        <div className='items-center justify-center hidden col-span-1 sm:flex '>
          <p className='mt-16 text-xl font-bold text-[#e95d7a] md:text-4xl lg:text-5xl 2xl:text-6xl'>
            FUKLA
          </p>
        </div>

        {/* Central Content */}
        <div className='flex flex-col items-center justify-center col-span-3 text-center'>
          <h1 className='text-4xl font-bold tracking-widest text-white uppercase sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl'>
            ПЛИТКИ
          </h1>
          <p className='mt-4 text-2xl font-medium tracking-widest text-white lg:text-3xl xl:text-4xl 2xl:text-5xl'>
            БЪДИ СТИЛНА БЪДИ НЕПОВТОРИМА
          </p>
          <div
            className='my-10 text-xs site-button xs:text-md md:text-xl lg:text-2xl'
            onClick={handleScroll}
          >
            <span>РАЗГЛЕДАЙ</span>
          </div>
        </div>

        {/* Right Logo */}
        <div className='items-center justify-center hidden col-span-1 sm:flex'>
          <p className='mt-16 text-xl font-bold text-[#e95d7a] md:text-4xl lg:text-5xl 2xl:text-6xl'>
            FUKLA
          </p>
        </div>
      </div>
    </div>
  );
};
