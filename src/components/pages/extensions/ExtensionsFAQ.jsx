import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '1. Какво представляват синтетичните опашки?',
    answer:
      'Синтетичните опашки са изработени от висококачествена изкуствена коса и се използват за удължаване и придаване на обем на прическите.',
  },
  {
    question: '2. Колко време издържат синтетичните опашки?',
    answer:
      'С правилна поддръжка синтетичните опашки могат да издържат месеци, като запазват формата и вида си.',
  },
  {
    question: '3. Как да се грижа за синтетичните опашки?',
    answer:
      'Мийте ги с хладка вода и нежен шампоан, оставяйте ги да изсъхнат естествено и избягвайте използването на топлинни уреди.',
  },
  {
    question:
      '4. Мога ли да използвам преса или маша върху синтетичните опашки?',
    answer:
      'Не се препоръчва използването на топлинни уреди върху синтетични опашки, тъй като те могат да се повредят или деформират.',
  },
  {
    question: '5. Подходящи ли са за ежедневна употреба?',
    answer:
      'Да, синтетичните опашки са удобни и лесни за използване, което ги прави подходящи както за ежедневието, така и за специални случаи.',
  },
  {
    question: '6. Мога ли да боядисам синтетичната опашка?',
    answer:
      'Не, синтетичните опашки не могат да бъдат боядисвани, тъй като материалът им не поема боята.',
  },
  {
    question: '7. Налични ли са различни цветове и стилове?',
    answer:
      'Да, предлагаме широка гама от цветове и стилове, за да намерите най-подходящото за вас.',
  },
  {
    question: '8. Къде мога да закупя синтетичните опашки?',
    answer:
      'Синтетичните опашки са налични само на място в нашия салон. Заповядайте, за да изберете най-добрия вариант за вас.',
  },
];

export const ExtensionsFAQ = () => {
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
