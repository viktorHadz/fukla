import { CustomSwiper } from '../../common/CustomSwiper';

export const SliderStart = () => {
  const slides = [
    <div className='flex flex-col items-center gap-6 p-6 text-center'>
      <p className='text-xl font-semibold text-white sm:text-2xl'>Прецизна подготовка</p>
      <img
        className='rounded-md max-w-[280px] sm:max-w-xs'
        src='images/services/1.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='flex flex-col items-center gap-6 p-6 text-center'>
      <p className='text-xl font-semibold text-white sm:text-2xl'>Внимателно сплитане</p>

      <img
        className='rounded-md sm:max-w-xs max-w-[280px]'
        src='images/services/2.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='flex flex-col items-center gap-6 p-6 text-center'>
      <p className='text-xl font-semibold text-white sm:text-2xl'>Детайлна грижа</p>

      <img
        className='rounded-md sm:max-w-xs max-w-[280px]' 
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
