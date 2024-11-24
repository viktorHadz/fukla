import { SliderStart } from './SliderStart';

export const BraidsHero = () => {
  return (
    <>
      {/* Card Grid - Medium and Larger Screens */}
      <div className='justify-around hidden p-4 md:p-6 lg:p-8 sm:flex bg-dark-gradient'>
        {[1, 2, 3].map((process) => (
          <div
            key={`process-${process}`}
            className='relative h-auto max-w-xs mx-2 overflow-hidden transition duration-300 rounded-md group hover:scale-105'
          >
            {/* Background Image */}
            <img
              className='object-cover w-full h-full rounded-md'
              src={`images/services/${process}.webp`}
              alt={`Process ${process}`}
              loading='lazy'
            />

            {/* Hover Overlay */}
            <div className='absolute inset-0 flex items-center justify-center bg-[#E95D7A]/80 opacity-0 group-hover:opacity-100 transition duration-300'>
              <h2 className='text-lg font-semibold text-center text-white'>
                {process === 1
                  ? 'Прецизна подготовка'
                  : process === 2
                  ? 'Внимателно сплитане'
                  : 'Детайлна грижа'}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Slider - Small Screens */}
      <div className='flex items-center justify-center sm:hidden bg-dark-gradient'>
        <SliderStart />
      </div>
    </>
  );
};
