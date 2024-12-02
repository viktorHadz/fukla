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
              <div className='flex justify-around mt-14'>
                {/* order first */}
                <div className='hidden pt-32 ml-auto space-y-8 sm:flex sm:flex-none w-44 sm:ml-0 lg:order-first sm:pt-36'>
                  <div className='relative'>
                    <img
                      src='/images/extensions/humanSynth.webp'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                  </div>
                </div>
                {/* order second */}
                <div className='flex-none pt-32 space-y-12 w-44 sm:pt-0'>
                  <div className='relative'>
                    <img
                      src='/images/extensions/humanSynth2.webp'
                      alt='brown synthetic hair'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <img
                      src='/images/extensions/humanSynth3.webp'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                {/* order third */}
                <div className='flex-none space-y-8 w-44 sm:mr-0 sm:pt-36'>
                  <div className='relative'>
                    <img
                      src='/images/extensions/humanSynth4.webp'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <img
                      src='/images/extensions/humanSynth5.webp'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
