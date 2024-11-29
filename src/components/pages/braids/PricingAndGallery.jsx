import { CheckIcon } from '@heroicons/react/24/outline';
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$19',
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$49',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const PricingAndGallery = () => {
  return (
    <div className='relative px-6 mt-32 bg-white isolate sm:mt-56 lg:px-8'>
      <div
        className='absolute inset-x-0 overflow-hidden -top-3 -z-10 transform-gpu px-36 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#e95d7a] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='max-w-2xl mx-auto text-center lg:max-w-4xl'>
        <h2 className='text-base font-semibold leading-7 text-[#e95d7a]'>
          Цени и Галерия
        </h2>
        <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Kачество, което си заслужава
        </p>
      </div>
      <p className='max-w-2xl mx-auto mt-6 text-lg leading-8 text-center text-gray-600'>
        Разгледайте нашата галерия, за да откриете вдъхновение, и намерете
        стила, който ви подхожда. Предлагаме конкурентни цени за плитки,
        създадени с внимание и професионализъм.
      </p>
      <div className='grid items-center max-w-lg grid-cols-1 mx-auto mt-16 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2'>
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-gray-900 shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-indigo-400' : 'text-[#e95d7a]',
                'text-base font-semibold leading-7'
              )}
            >
              {tier.name}
            </h3>
            <p className='flex items-baseline mt-4 gap-x-2'>
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-bold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base'
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base leading-7'
              )}
            >
              {tier.description}
            </p>
            <ul
              role='list'
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className={classNames(
                      tier.featured ? 'text-indigo-400' : 'text-[#e95d7a]',
                      'h-6 w-5 flex-none'
                    )}
                    aria-hidden='true'
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-[#e95d7a] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-[#e95d7a]',
                'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
