import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '1. Какво е jagua гел?',
    answer:
      'Jagua гел е натурален продукт, извлечен от плодовете на тропическото дърво Genipa americana. Той придава тъмносиньо-черен оттенък, наподобяващ истинско мастило.',
  },
  {
    question: '2. Колко време издържа jagua татуировката?',
    answer:
      'Jagua татуировките издържат между 1 и 3 седмици, в зависимост от типа кожа и грижата за тях.',
  },
  {
    question: '3. Безопасен ли е jagua гелът за кожата?',
    answer:
      'Да, нашият jagua гел е хипоалергенен и напълно безопасен, дори за хора с чувствителна кожа.',
  },
  {
    question: '4. Мога ли сам да нанасям jagua татуировка у дома?',
    answer:
      'Разбира се! Jagua гелът е лесен за употреба. Ние предлагаме и комплекти за домашно приложение с всички необходими инструкции.',
  },
  {
    question: '5. Ще остави ли jagua петна по дрехите ми?',
    answer:
      'Jagua гелът може да остави петна, докато не е напълно изсъхнал, затова препоръчваме да избягвате контакт с текстил по време на нанасянето.',
  },
  {
    question: '6. Колко време отнема нанасянето на татуировката?',
    answer:
      'Нанасянето може да отнеме от 10 до 30 минути в зависимост от сложността на дизайна. Гелът трябва да остане върху кожата около 2 часа, за да се постигне наситен цвят.',
  },
  {
    question: '7. Как мога да се грижа за jagua татуировката си?',
    answer:
      'Избягвайте търкане, измиване със силни сапуни и контакт с масла, за да удължите живота на татуировката.',
  },
  {
    question: '8. Подходящо ли е за деца?',
    answer:
      'Jagua гелът е безопасен за повечето хора, но за деца под 12 години се препоръчва предварителен тест за чувствителност.',
  },
  {
    question: '9. Как да премахна jagua татуировката по-бързо?',
    answer:
      'Jagua татуировките избледняват естествено с времето. Ако искате да ги премахнете по-бързо, измивайте зоната с топла вода и ексфолирайте внимателно.',
  },
];

export const TattooFAQ = () => {
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
