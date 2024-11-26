const features = [
  {
    name: 'Плитки',
    description: 'Класически и модерни плитки за всяка визия.',
    icon: '/images/home/icons/braids.svg',
  },
  {
    name: 'Прежда за Плитки',

    description: 'Разнообразие от цветове и текстури.',
    icon: '/images/home/icons/extensions.svg',
  },
  {
    name: 'Нокти',
    description: 'Елегантност за вашите ръце и крака.',
    icon: '/images/home/icons/nails.svg',
  },
  {
    name: 'Временни Татуировки',
    description: 'Уникален акцент за специални моменти.',

    icon: '/images/home/icons/tatoo.svg',
  },
];

export const OurServices = () => {
  return (
    <div className='px-6 mx-auto my-28 max-w-7xl sm:my-40 lg:px-8'>
      <div className='max-w-2xl mx-auto lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-[#e95d7a]'>
          Перфектният избор за всеки стил.
        </h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl'>
          Създаваме визии, които говорят вместо вас.
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Всяка плитка и маникюр са израз на вашата индивидуалност и стил. Ние
          създаваме елегантни и практични визии, за да се чувствате уверени и
          красиви всеки ден. Независимо дали търсите модерни плитки, перфектения
          маникюр, или нещо друго ние сме тук, за да създадем магия.
        </p>
      </div>
      <div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-12 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-24'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-zinc-900'>
                <div className='absolute top-0 my-2 left-0 flex items-center justify-center w-12 h-12 bg-[#e95d7a] rounded-lg'>
                  <img
                    src={feature.icon}
                    alt={feature.name}
                    className='w-8 h-8'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
