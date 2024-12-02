const nails = [
  {
    name: 'Апаратен маникюр',
    undertext: 'Прецизност и здравина.',
    imageUrl: '/images/nails/purplleee.webp',
    bio: 'Маникюр с апарат е идеален за перфектно поддържани нокти – грижа за здравината и изяществото на вашите ръце.',
  },
  {
    name: 'Гел лак',
    undertext: 'Дълготрайна и бляскава визия.',
    imageUrl: '/images/nails/neonGreen.webp',
    bio: 'Насладете се на дълготраен и бляскав маникюр, създаден да подчертае красотата на вашите нокти и да издържи дни наред.',
  },
  {
    name: 'Педикюр',
    undertext: 'Грижа и комфорт.',
    imageUrl: '/images/nails/pinkPedicure.webp',
    bio: 'Нашият педикюр съчетава комфорт и професионализъм, за да се почувствате прекрасно от главата до петите.',
  },
  {
    name: 'Изграждане',
    undertext: 'Създаваме съвършени форми.',
    imageUrl: '/images/nails/whiteNails.webp',
    bio: 'За всички, които искат здрави и дълги нокти – изграждането е решението, което съчетава естетика и издръжливост.',
  },
];

export const NailsStyles = () => {
  return (
    <div className='py-24 bg-dark-gradient sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto sm:text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-white md:text-5xl'>
            Нашите модели
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Потопете се в свят на красота с нашите изключителни маникюри и
            педикюри. Те съчетават изящество, стил и неповторим блясък, за да
            допълнят вашата визия със съвършена елегантност. Всяко творение е
            отражение на вашата индивидуалност.
          </p>
        </div>
        <div
          role='list'
          className='grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none'
        >
          {nails.map((nail) => (
            <li key={nail.name} className='flex flex-col gap-6 xl:flex-row'>
              <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={nail.imageUrl}
                alt=''
              />
              <div className='flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-white'>
                  {nail.name}
                </h3>
                <p className='text-base leading-7 text-pinkv'>
                  {nail.undertext}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-300'>
                  {nail.bio}
                </p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
