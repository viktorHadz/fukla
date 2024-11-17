export const OurServices = () => {
  return (
    <section className='flex flex-col items-center w-full p-12 sm:p-18'>
      <h2 className='mb-12 text-4xl text-center underline-txt md:text-5xl sm:mb-10'>
        Какво предлагаме?
      </h2>
      <div className='grid grid-cols-2 gap-20 text-center lg:grid-cols-4 sm:gap-28 lg:gap-32'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center w-24 h-24'>
            <img
              className='max-w-full max-h-full'
              src='./images/home/icons/braidServices.svg'
              alt='Braid Services'
            />
          </div>
          <h3 className='mt-2 text-lg md:text-xl'>Плитки</h3>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center w-24 h-24'>
            <img
              className='max-w-full max-h-full'
              src='./images/home/icons/braidsForSale.svg'
              alt='Colored Braids'
            />
          </div>
          <h3 className='mt-2 text-lg md:text-xl'>
            Прежда за
            <br />
            Екстенщъни
          </h3>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center w-24 h-24'>
            <img
              className='max-w-full max-h-full'
              src='./images/home/icons/nails.svg'
              alt='Nail Services'
            />
          </div>
          <h3 className='mt-2 text-lg md:text-xl'>Маникюр</h3>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center w-24 h-24'>
            <img
              className='max-w-full max-h-full'
              src='./images/home/icons/tatoo.svg'
              alt='Tattoo Services'
            />
          </div>
          <h3 className='mt-2 text-lg md:text-xl'>
            Временни <br /> Татуировки
          </h3>
        </div>
      </div>
    </section>
  );
};
