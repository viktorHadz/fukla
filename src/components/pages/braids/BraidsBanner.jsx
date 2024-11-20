import { scrollToElement } from '../../common/scrollToElement';

export const BraidsBanner = () => {
  const handleScroll = () => {
    scrollToElement('braids-welcome');
  };

  return (
    <div className='w-full h-[400px] lg:h-[500px] bg-zinc-900 relative overflow-hidden mt-20 cursor-default flex items-center justify-center'>
      {/* Background Image */}
      <div
        className='absolute top-0 left-0 w-full h-full mb-10 bg-center'
        style={{
          backgroundImage: `url('images/home/braid-thread.webp')`,
          opacity: '50%',
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
          className='px-6 py-3 my-8 font-medium text-white transition-all bg-[#e95d7a] rounded-md hover:bg-[#e44061]'
          onClick={handleScroll}
        >
          РАЗГЛЕДАЙ
        </button>
      </div>
    </div>
  );
};
