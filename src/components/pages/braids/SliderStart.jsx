import { CustomSwiper } from '../../common/CustomSwiper';

export const SliderStart = () => {
  const slides = [
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>Прецизна подготовка</p>
      <img
        className=' braidshero__image'
        src='images/services/1.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>Внимателно сплитане</p>

      <img
        className='braidshero__image'
        src='images/services/2.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>Детайлна грижа</p>

      <img
        className=' braidshero__image'
        src='images/services/3.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
  ];
  return (
    <>
      <CustomSwiper slides={slides} />
    </>
  );
};
