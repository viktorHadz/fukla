import { ArrowRightIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Безкрайна креативност.',
    description:
      'Разгърнете своя стил с впечатляващи и детайлни дизайни, създадени с jagua временни татуировки.',
    icon: ArrowRightIcon,
  },
  {
    name: 'Натурални и безопасни.',
    description:
      'Направени от натурален екстракт на плода jagua, те са хипоалергенни и нежни към кожата.',
    icon: ArrowRightIcon,
  },
  {
    name: 'Дълготрайна красота.',
    description:
      'Насладете се на татуировки с реалистичен вид, които издържат между 1 и 3 седмици.',
    icon: ArrowRightIcon,
  },
];

export const TattooStyles = () => {
  return (
    <div className='py-24 bg-white'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative px-6 py-20 overflow-hidden bg-dark-gradient isolate sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24'>
          <div className='grid max-w-md mx-auto gap-y-8 sm:max-w-lg sm:gap-y-10 sm:px-4 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0 lg:gap-x-6'>
            <div className='lg:row-start-2 lg:max-w-md'>
              <h2 className='text-xl font-bold tracking-tight text-white sm:text-2xl'>
                Открийте изкуството <br />
                на Jagua.
              </h2>
              <p className='mt-4 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7'>
                Временните татуировки с jagua ви позволяват да изразите себе си
                с натурален, безопасен и стилен начин. Те са идеалното решение
                за смели експерименти или изискани акценти, които могат да бъдат
                сменяни толкова често, колкото пожелаете.
              </p>
            </div>
            <img
              src='/images/tattoo/girlTattooing.webp'
              alt='Featured temporary tattoo screenshot'
              className='w-[12rem] max-w-full rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[14rem] md:w-[18rem] lg:row-span-4 lg:w-[24rem] lg:ml-auto lg:-mr-4 lg:overflow-hidden'
            />
            <div className='max-w-md mx-auto lg:row-start-3 lg:mt-8 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-6'>
              <dl className='space-y-4 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative'>
                    <dt className='inline-block ml-8 font-semibold text-white'>
                      <feature.icon
                        className='absolute top-0 left-0 w-4 h-4 my-1.5 text-pinkv'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div
            className='pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu'
            aria-hidden='true'
          >
            <div
              className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#e95a7d] opacity-25'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
