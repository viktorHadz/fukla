import { SliderStart } from './SliderStart';

export const BraidsHero = () => {
  return (
    <>
      {/* Card Grid Visible on medium and larger screens */}
      <div className='justify-around hidden p-8 md:p-10 lg:p-14 xl:p-16 sm:flex bg-zinc-900'>
        {[1, 2, 3].map((process) => (
          <div
            key={`process-${process}`}
            className='relative h-auto mx-4 overflow-hidden transition duration-300 rounded-md max-w-96 group hover:scale-105 '
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
              <h2 className='text-2xl font-semibold text-center text-white'>
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

      {/* Slider (Visible on small screens) */}
      <div className='flex items-center justify-center sm:hidden bg-zinc-900'>
        <SliderStart />
      </div>
    </>
  );
};
