import { scrollToElement } from '../../common/scrollToElement';
export const Tails = () => {
  const handleScroll = () => {
    scrollToElement('what-we-offer');
  };
  return (
    <div className='relative flex justify-around pt-4 pb-0 overflow-hidden h-[500px] lg:h-[600px] xs:pt-12 sm:pt-24 bg-zinc-900 isolate'>
      <div className='flex flex-col justify-around w-full sm:flex sm:flex-row'>
        {/*1 - Banner logo */}
        <div className='flex flex-col justify-center text-center text-white sm:text-left'>
          <h1 className='text-[#e95d7a] text-6xl font-extrabold hidden lg:block'>
            Fukla
          </h1>
          <span className='my-4'>
            <p className='text-4xl font-semibold '>Красота с характер</p>
            <p className='text-sm italic quote-text xs:text-base sm:text-lg md:text-xl lg:text-2xl'>
              - "Бъди <span className='text-[#e95d7a]'>дръзка</span>, бъди{' '}
              <span className='text-[#e95d7a]'>уникална</span>, бъди
              <span className='text-[#e95d7a]'> Фукла</span>
              !"
            </p>
          </span>
          <div>
            <button
              onClick={handleScroll}
              className='text-xs site-button-alt xs:text-sm md:text-base lg:text-lg'
            >
              РАЗГЛЕДАЙ
            </button>
          </div>
        </div>

        {/*2 - Banner Image */}
        <div className='flex justify-end'>
          <img
            src='images/home/small-banner-image.webp'
            className='absolute object-contain -bottom-10 xs:w-40 sm:w-48 lg:w-64 2xl:w-72'
            alt='Right-side banner'
            loading='eager'
          />
        </div>

        {/* Gradients */}
        <div
          className='absolute left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-24rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu motion-safe:animate-pulse'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e26e85] to-[#e04262] opacity-40'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl motion-safe:animate-pulse'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#c26c7d] to-[#d1546d] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
