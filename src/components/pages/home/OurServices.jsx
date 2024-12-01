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
    <div
      className='px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8'
      id='what-we-offer'
    >
      <div className='max-w-2xl mx-auto lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-pinkv'>
          Перфектният избор за всеки стил
        </h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl'>
          Създаваме визии, които говорят вместо вас
        </p>
        <div className='w-full max-w-2xl my-8 xl:w-96 xl:flex-none'>
          <div className='relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto'>
            <img
              className='absolute inset-0 object-cover object-[0%_32%] w-full h-full bg-gray-800 shadow-2xl rounded-2xl'
              src='/images/home/threeOfUsHome.webp'
              alt=''
            />
          </div>
        </div>
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
                <div className='absolute top-0 left-0 flex items-center justify-center w-12 h-12 my-2 rounded-lg bg-pinkv'>
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
