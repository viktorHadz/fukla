export const Tails = () => {
  return (
    <div className='relative flex justify-around px-6 pt-4 pb-0 overflow-hidden xs:pt-12 sm:pt-24 bg-zinc-950 isolate lg:px-16'>
      <div className='grid w-full grid-cols-1 sm:grid-cols-2'>
        {/* Col 1 - Banner logo */}
        <div className='flex items-end justify-center ml-0 sm:items-center sm:row-span-2 sm:ml-20'>
          <div className='flex flex-col justify-center space-y-4 text-center banner-content banner-text sm:justify-start sm:text-left xs:space-y-6'>
            <h1 className='text-4xl font-extrabold banner-logo xs:text-5xl md:text-6xl lg:text-7xl'>
              <span className='text-hot-pink'>F</span>ukla
            </h1>
            <span className='space-y-2'>
              <p className='text-base font-semibold text-left text-under-logo xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                Красота с характер
              </p>
              <p className='text-sm italic text-left quote-text xs:text-base sm:text-lg md:text-xl lg:text-2xl'>
                - "Бъди{' '}
                <span className='quote-text-accent text-hot-pink'>дръзка</span>,
                бъди{' '}
                <span className='quote-text-accent text-hot-pink'>
                  уникална
                </span>
                , бъди
                <span className='quote-text-accent text-hot-pink'> Фукла</span>
                !"
              </p>
            </span>
            <div className='text-xs site-button xs:text-sm md:text-base lg:text-lg'>
              <span>РАЗГЛЕДАЙ</span>
            </div>
          </div>
        </div>

        {/* Col 2 - Banner Image */}
        <div className='flex justify-center ml-20 mr-0 lg:mr-20 lg:ml-0 sm:row-span-2'>
          <div className='relative'>
            <img
              src='images/home/small-banner-image.webp'
              className='object-contain w-40 banner-image xs:w-48 sm:w-64 md:w-80 lg:w-96'
              alt='Right-side banner'
            />
          </div>
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
