export const ExtensionsHero2 = () => {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative'>
          <div className='pt-24 sm:pt-32'>
            <div className='max-w-5xl px-6 mx-auto 2xl:max-w-7xl lg:px-8'>
              <div className='max-w-2xl mx-auto text-center'>
                <h2 className='text-base font-semibold leading-7 text-pinkv'>
                  Удобство и достъпност
                </h2>
                <h1 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
                  Синтетични опашки за всеки ден.
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Нашите синтетични опашки са идеалното решение за удължаване и
                  обем на вашата прическа. Те предлагат достъпна алтернатива на
                  естествената коса и са лесни за поддръжка. Предлагат се в
                  различни стилове и цветове, за да отговорят на вашия вкус и
                  нужди.
                </p>
              </div>
              <div className='flow-root mt-16'>
                <div className='inline-block w-full'>
                  <img
                    src='/images/home/braid-thread.webp'
                    alt='synthetic hair extensions display'
                    className='rounded-lg object-cover h-[30vh] w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
