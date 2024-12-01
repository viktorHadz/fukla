import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '1. Колко време отнема процесът на сплитане?',
    answer:
      'Времето зависи от сложността на стила. Обикновено процесът може да отнеме между 1 и 4 часа, като по-сложните стилове изискват повече време.',
  },
  {
    question: '2. Колко дълга трябва да е косата ми, за да направя плитки?',
    answer:
      'Минималната дължина е около 7-10 см, за да можем да създадем устойчиви и дълготрайни плитки.',
  },
  {
    question: '3. Мога ли да избера цвета на косата за плитките?',
    answer:
      'Разбира се! Предлагаме разнообразие от цветове, които могат да бъдат комбинирани, спрямо Вашият вкус с предпочитания.',
  },
  {
    question: '4. Колко време издържат плитките?',
    answer:
      'Зависи от модела плитки, има плитки които издържат между 3 и 7 дни, други между 1 и 4 седмици, с правилна грижа може да ги запазите и за по-дълъг период.',
  },
  {
    question: '5. Как да се грижа за плитките си?',
    answer:
      'Много е важно как спите, измивайте косата само при нужда, без използване на балсами и маски, избягвайте прекомерно натоварване или дърпане на косата.',
  },
  {
    question: '6. Предлагате ли персонализирани стилове?',
    answer: 'Да, ние сме тук, за да реализираме вашите идеи!',
  },
  {
    question: '7. Безопасно ли е за косата ми?',
    answer:
      'Разбира се, че да. Всяка прическа от плитки се прави съобразно Вашата коса.',
  },
  {
    question: '8. Трябва ли да измивам косата си преди посещението?',
    answer:
      'Не е задължително, даже не е препоръчително, само ако ще стоите повече от седмица с плитките, за да избегнем раздразнение по скалпа. ',
  },
  {
    question: '9. Мога ли да разплета плитките самостоятелно?',
    answer:
      'Да, но за по-сложни стилове препоръчваме професионално разплитане, за да се избегне увреждане на косата.',
  },
  {
    question: '10. Как мога да запазя час?',
    answer: (
      <span>
        Можете да запазите час чрез нашия профил в{' '}
        <a
          href='https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=431e6b2c-4f89-45b9-84bb-73ca48c714f6'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline hover:text-blue-800'
        >
          Notino
        </a>
        , или като се свържете с нас директно по телефон или социалните мрежи.
      </span>
    ),
  },
];

export const FAQ = () => {
  return (
    <div className='px-6 mx-auto mt-32 max-w-7xl sm:mt-56 lg:px-8'>
      <div className='max-w-4xl mx-auto divide-y divide-gray-900/10'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
          Често задавани въпроси:
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
          {faqs.map((faq) => (
            <Disclosure as='div' key={faq.question} className='pt-6'>
              {({ open }) => (
                <>
                  <dt>
                    <DisclosureButton className='flex items-start justify-between w-full text-left text-gray-900'>
                      <span className='text-base font-semibold leading-7'>
                        {faq.question}
                      </span>
                      <span className='flex items-center ml-6 h-7'>
                        {open ? (
                          <MinusIcon className='w-6 h-6' aria-hidden='true' />
                        ) : (
                          <PlusIcon className='w-6 h-6' aria-hidden='true' />
                        )}
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as='dd' className='pr-12 mt-2'>
                    <p className='text-base leading-7 text-gray-600'>
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
};
