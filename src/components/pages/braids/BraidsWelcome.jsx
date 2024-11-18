import { ExpandableText } from '../../common/ExpandableText';

export const BraidsWelcome = () => {
  return (
    <section className='w-full' id='braids-welcome'>
      <div className='flex flex-col justify-center justify-self-center  p-6 text-center 2xl:max-w-[50%] sm:p-12'>
        <span className='mb-2 text-2xl font-semibold text-center sm:text-4xl'>
          <span className='underline-txt'>ЗАЩО</span>{' '}
          <span className='underline-txt'>ПЛИТКИ?</span>
        </span>
        <h2 className='mb-6 text-xl sm:text-2xl'>
          Удобство да се събуждаш красива.
        </h2>
        <p className='hidden lg:block'>
          Сплитането на косата дава възможност да разполагаш с времето си за
          всичко останало. Едновременно постигаш промяна във визията си и
          мечтаната дълга коса. Плитката не е просто практичен начин да
          премахнете косата от лицето си, докато се опитвате да свършите всички
          задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
          допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
          усмивката е на лице!
        </p>
        <ExpandableText
          className='text-gray-900 lg:hidden'
          buttonClass='text-[#E95D7A] lg:hidden hover:underline'
          previewLines={3}
          expandedText='Виж по-малко'
          collapsedText='Виж повече'
        >
          Сплитането на косата дава възможност да разполагаш с времето си за
          всичко останало. Едновременно постигаш промяна във визията си и
          мечтаната дълга коса. Плитката не е просто практичен начин да
          премахнете косата от лицето си, докато се опитвате да свършите всички
          задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
          допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
          усмивката е на лице!
        </ExpandableText>
      </div>
    </section>
  );
};
