import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '1. Колко време отнема маникюрът или педикюрът?',
    answer:
      'И двете процедури отнемат около 50 минути до 1 час, в зависимост от избрания вид и сложност.',
  },
  {
    question: '2. Какви материали използвате?',
    answer:
      'Работим с висококачествени продукти, за да осигурим здраве, дълготрайност и красота на вашите нокти.',
  },
  {
    question: '3. Предлагате ли дизайн по идея на клиента?',
    answer:
      'Да, можем да създадем уникален дизайн според вашите желания и вдъхновения.',
  },
  {
    question: '4. Колко издържа гел лакът?',
    answer:
      'Гел лакът издържа между 2 и 4 седмици, в зависимост от правилната грижа и начина на живот.',
  },
  {
    question: '5. Какво е апаратен маникюр?',
    answer: (
      <>
        <span>
          <strong>Апаратният маникюр</strong> е иновативна техника, която
          използва специална електрическа пила и накрайници за грижа за ръцете и
          ноктите. Това е безопасен и ефективен метод, който не включва остри
          инструменти и минимизира риска от нараняване.
        </span>
        <span>
          <br />
          <strong>С този метод:</strong>
        </span>
        <ol>
          <li> - Кератинизираният слой на кожата се отстранява.</li>
          <li> - Кутикулата се оформя и обработва прецизно.</li>
          <li>
            - Повърхността на ноктите се изравнява, придавайки естествен блясък.
          </li>
          <li>
            - Труднодостъпните зони около ноктите се почистват внимателно.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: '6. Подходящо ли е изграждането за слаби нокти?',
    answer:
      'Да, изграждането укрепва слаби нокти, като предоставя дълготрайно и красиво решение.',
  },
  {
    question: '7. Можете ли да препоръчате грижа за педикюр у дома?',
    answer:
      'Да, редовно овлажнявайте кожата на краката и използвайте подходящи продукти за поддържане на мекота и комфорт.',
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
