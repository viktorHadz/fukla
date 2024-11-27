import { ImageLayout } from './ImageLayout';

import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$32',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$48',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const BraidsTypes = () => {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative pt-14'>
          <div
            className='absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80 lg:motion-safe:animate-pulse'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fa7681] to-[#e95d7a] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='py-24 sm:py-32'>
            <div className='max-w-5xl px-6 mx-auto 2xl:max-w-7xl lg:px-8'>
              <div className='max-w-2xl mx-auto text-center'>
                <h2 className='text-base font-semibold leading-7 text-[#e95d7a]'>
                  Удобство и красота
                </h2>
                <h1 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
                  Стил, който вдъхновява.
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Всяка плитка разказва история – за увереност, красота и
                  уникалност. Нашите стилове са създадени, за да ви накарат да
                  се почувствате специални и да добавят нотка елегантност към
                  ежедневието ви.
                </p>
              </div>
              <div className='flow-root mt-16 sm:mt-24'>
                <div className='inline-block w-full p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <ImageLayout />
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-2/3 bg-gradient-to-tr from-[#fa7681] to-[#e95d7a] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Testimonial section */}
        <div className='mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8'>
          <div className='relative px-6 py-20 overflow-hidden bg-gray-900 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20'>
            <img
              className='absolute inset-0 object-cover w-full h-full brightness-150 saturate-0'
              src='https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80'
              alt=''
            />
            <div className='absolute inset-0 bg-gray-900/90 mix-blend-multiply' />
            <div
              className='absolute -left-80 -top-56 transform-gpu blur-3xl'
              aria-hidden='true'
            >
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className='hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl'
              aria-hidden='true'
            >
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className='relative max-w-2xl mx-auto lg:mx-0'>
              <img
                className='w-auto h-12'
                src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
                alt=''
              />
              <figure>
                <blockquote className='mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8'>
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac.”
                  </p>
                </blockquote>
                <figcaption className='mt-6 text-base text-white'>
                  <div className='font-semibold'>Judith Black</div>
                  <div className='mt-1'>CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className='py-24 sm:pt-48'>
          <div className='px-6 mx-auto max-w-7xl lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-base font-semibold leading-7 text-indigo-600'>
                Pricing
              </h2>
              <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                Pricing plans for teams of all sizes
              </p>
            </div>
            <p className='max-w-2xl mx-auto mt-6 text-lg leading-8 text-center text-gray-600'>
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
            <div className='grid max-w-md grid-cols-1 mx-auto mt-16 isolate gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                    tierIdx === 0 ? 'lg:rounded-r-none' : '',
                    tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                    'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                  )}
                >
                  <div>
                    <div className='flex items-center justify-between gap-x-4'>
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? 'text-indigo-600'
                            : 'text-gray-900',
                          'text-lg font-semibold leading-8'
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className='rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600'>
                          Most popular
                        </p>
                      ) : null}
                    </div>
                    <p className='mt-4 text-sm leading-6 text-gray-600'>
                      {tier.description}
                    </p>
                    <p className='flex items-baseline mt-6 gap-x-1'>
                      <span className='text-4xl font-bold tracking-tight text-gray-900'>
                        {tier.priceMonthly}
                      </span>
                      <span className='text-sm font-semibold leading-6 text-gray-600'>
                        /month
                      </span>
                    </p>
                    <ul
                      role='list'
                      className='mt-8 space-y-3 text-sm leading-6 text-gray-600'
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex gap-x-3'>
                          <CheckIcon
                            className='flex-none w-5 h-6 text-indigo-600'
                            aria-hidden='true'
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    Buy plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
