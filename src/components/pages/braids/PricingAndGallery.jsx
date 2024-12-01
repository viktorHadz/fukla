import { DialogPopUp } from '../../common/DialogPopUp';
import { BraidsPricing } from './BraidsPricing';
import BraidsGallery from './BraidsGallery';
import { CheckIcon } from '@heroicons/react/24/outline';
const tiers = [
  {
    name: 'Галерия',
    id: 'gallery',
    href: '#gallery',
    description:
      'Разгледайте нашата колекция от прически и плитки, вдъхновени от стил и индивидуалност.',
    features: [
      'Широка гама от стилове',
      'Уникални дизайни',
      'Вдъхновение за вашия нов облик',
      'Снимки от реални клиенти',
    ],
    featured: false,
  },
  {
    name: 'Ценоразпис',
    id: 'pricing',
    href: '#pricing',
    description:
      'Достъпни цени за стилове, които подчертават вашата индивидуалност.',
    features: [
      'Класически плитки: Започва от 30 лв.',
      'Боксьорски плитки: Започва от 40 лв.',
      'Афроплитки: Започва от 50 лв.',
      'Персонализирани плитки: Цените варират според сложността',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const PricingAndGallery = ({ initialImages, nextPageTokenRef }) => {
  return (
    <div className='relative px-6 mt-32 bg-white isolate sm:mt-56 lg:px-8'>
      <div
        className='absolute inset-x-0 overflow-hidden -top-3 -z-10 transform-gpu px-36 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-pinkv opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='max-w-2xl mx-auto text-center lg:max-w-4xl'>
        <h2 className='text-base font-semibold leading-7 text-pinkv'>
          Цени и Галерия
        </h2>
        <p className='mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
          Kачество, което си заслужава
        </p>
      </div>
      <p className='max-w-2xl mx-auto mt-6 text-lg leading-8 text-center text-zinc-600'>
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
                ? 'relative bg-dark-gradient shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-zinc-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-pinkv' : 'text-pinkv',
                'text-base font-semibold leading-7'
              )}
            >
              {tier.name}
            </h3>
            <p className='flex items-baseline mt-4 gap-x-2'>
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-zinc-900',
                  'text-5xl font-bold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-zinc-400' : 'text-zinc-500',
                  'text-base'
                )}
              ></span>
            </p>
            <p
              className={classNames(
                tier.featured ? 'text-zinc-300' : 'text-zinc-600',
                'mt-6 text-base leading-7'
              )}
            >
              {tier.description}
            </p>
            <div
              role='list'
              className={classNames(
                tier.featured ? 'text-zinc-300' : 'text-zinc-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className={classNames(
                      tier.featured ? 'text-pinkv' : 'text-pinkv',
                      'h-6 w-5 flex-none'
                    )}
                    aria-hidden='true'
                  />
                  {feature}
                </li>
              ))}
            </div>
            {tier.id === 'gallery' ? (
              <DialogPopUp
                buttonText='Разгледайте Галерията'
                buttonClass='site-button-3 w-full mt-4'
              >
                <BraidsGallery
                  initialImages={initialImages}
                  nextPageTokenRef={nextPageTokenRef}
                />
              </DialogPopUp>
            ) : (
              <DialogPopUp
                buttonText='Вижте Всички'
                buttonClass='w-full site-button mt-4'
              >
                <BraidsPricing />
              </DialogPopUp>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
