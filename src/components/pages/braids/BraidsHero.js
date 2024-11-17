import { SliderStart } from './SliderStart';

export const BraidsHero = () => {
  return (
    <>
      <div className='hidden p-10 lg:flex bg-zinc-900'>
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
      <div className='block lg:hidden'>
        <SliderStart />
      </div>
    </>
  );
};
