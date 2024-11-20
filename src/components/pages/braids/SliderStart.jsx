import { CustomSwiper } from '../../common/CustomSwiper';

export const SliderStart = () => {
  const slides = [
    <div className='flex flex-col gap-6 p-6 text-center'>
      <p className='text-2xl font-semibold text-white'>Прецизна подготовка</p>
      <img
        className='rounded-md'
        src='images/services/1.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='flex flex-col gap-6 p-6 text-center'>
      <p className='text-2xl font-semibold text-white'>Внимателно сплитане</p>

      <img
        className='rounded-md '
        src='images/services/2.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='flex flex-col gap-6 p-6 text-center'>
      <p className='text-2xl font-semibold text-white'>Детайлна грижа</p>

      <img
        className='rounded-md' 
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
