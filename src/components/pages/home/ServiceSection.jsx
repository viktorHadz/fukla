import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Плитки',
    id: 'service-braids',
    href: '/braids',
    description:
      'Косата е короната, която никога не сваляте. С правилната грижа и оформяне тя може да бъде блестящо свидетелство за вашата красота и увереност.',
    features: ['Модерни стилове', 'Дълготрайност', 'Подходящи за всеки повод'],
  },
  {
    name: 'Нокти',
    id: 'service-nails',
    href: '/nails',
    description:
      'Маникюрът е като бижу за вашите ръце – той добавя блясък и красота към вашия външен вид.',
    features: [
      'Разнообразие от дизайни',
      'Висококачествени материали',
      'Персонализирани решения',
    ],
  },
  {
    name: 'Временни Татуировки',
    id: 'service-temp-tattoos',
    href: '/tattoo',
    description:
      'Временните татуировки са начин да изразите своята креативност и уникалност, без да правите постоянен ангажимент.',
    features: [
      'Безопасни за кожата',
      'Дълготрайни, но лесни за премахване',
      'Уникални дизайни',
    ],
  },
  {
    name: 'Изкуствена Коса',
    id: 'service-braid-thread',
    href: '/braid-thread',
    description:
      'Добавете цвят и текстура към вашата прическа с прежда за плитки. Създайте стил, който подчертава вашата индивидуалност.',
    features: [
      'Разнообразие от цветове',
      'Подходящи за различни стилове',
      'Висококачествени материали',
    ],
  },
];

export const ServiceSection = () => {
  return (
    <div className='bg-transparent'>
      <main>
        {/* Services Section */}
        <div className='px-6 mx-auto mt-4 max-w-7xl sm:mt-12 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-base font-semibold leading-7 text-pinkv'>
              Нашите Услуги
            </h1>
          </div>

          <div className='grid max-w-md grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-none'>
            {services.map((service) => (
              <div
                key={service.id}
                className='relative p-6 transition-all duration-300 ease-in-out bg-white border border-transparent rounded-lg shadow-lg hover:border-pinkv hover:shadow-xl hover:scale-105'
              >
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                  {service.name}
                </h3>
                <p className='mt-2 text-gray-600'>{service.description}</p>
                <ul className='mt-4 space-y-2'>
                  {service.features.map((feature, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-2 h-2 mr-2 rounded-full bg-pinkv'></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className='inline-block mt-6 text-sm font-semibold text-pinkv hover:underline'
                >
                  Прочети повече
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   // More questions...
// ];
// {
//   /* FAQ section */
// }
// <div className='px-6 mx-auto my-24 max-w-7xl sm:my-56 lg:px-8'>
//   <div className='max-w-4xl mx-auto divide-y divide-gray-900/10'>
//     <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
//       Често задавани въпроси
//     </h2>
//     <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
//       {faqs.map((faq) => (
//         <Disclosure as='div' key={faq.question} className='pt-6'>
//           {({ open }) => (
//             <>
//               <dt>
//                 <Disclosure.Button className='flex items-start justify-between w-full text-left text-gray-900'>
//                   <span className='text-base font-semibold leading-7'>
//                     {faq.question}
//                   </span>
//                   <span className='flex items-center ml-6 h-7'>
//                     {open ? (
//                       <MinusSmallIcon className='w-6 h-6' aria-hidden='true' />
//                     ) : (
//                       <PlusSmallIcon className='w-6 h-6' aria-hidden='true' />
//                     )}
//                   </span>
//                 </Disclosure.Button>
//               </dt>
//               <Disclosure.Panel as='dd' className='pr-12 mt-2'>
//                 <p className='text-base leading-7 text-gray-600'>
//                   {faq.answer}
//                 </p>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </dl>
//   </div>
// </div>;
