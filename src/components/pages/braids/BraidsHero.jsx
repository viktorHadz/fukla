import { SliderStart } from './SliderStart';

export const BraidsHero = () => {
  return (
    <>
      <div className='justify-center hidden p-4 md:p-10 sm:flex bg-zinc-900'>
        <div className='slide-wrap-swipe'>
          <img
            className='braidshero__image'
            src='images/services/4.webp'
            alt='Service'
            loading='lazy'
          />
        </div>

        <div className='slide-wrap-swipe'>
          <img
            className='braidshero__image'
            src='images/services/4.webp'
            alt='Service'
            loading='lazy'
          />
        </div>

        <div className='slide-wrap-swipe'>
          <img
            className='braidshero__image'
            src='images/services/6.webp'
            alt='Service'
            loading='lazy'
          />
        </div>
      </div>
      <div className='block sm:hidden'>
        <SliderStart />
      </div>
    </>
  );
};
