// import { ExpandableText } from '../../common/ExpandableText';

export const BraidsDivider = () => {
  return (
    <div className='relative w-full'>
      {/* Background for large screens */}
      <div className='absolute inset-0 hidden bg-white lg:block -z-10'></div>

      {/* Content container */}
      <div className='flex flex-col lg:flex-row lg:max-w-[70%] mx-auto items-center gap-6 px-6 py-12 lg:px-16'>
        {/* Card 1 */}
        <div className='w-full lg:w-1/3 p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
          <div
            className='h-[200px] lg:h-[300px] bg-cover bg-center rounded-md mb-4'
            style={{
              backgroundImage: "url('images/braids/braidsSwiper1.webp')", // Replace with your image path
            }}
          ></div>
          <h2 className='mb-2 text-xl font-semibold text-white'>За Мен</h2>
          <p className='text-gray-300'>
            Открийте как плитките могат да преобразят вашата визия и да
            подчертаят естествената ви красота.
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-full lg:w-1/3 p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
          <div
            className='h-[200px] lg:h-[300px] bg-cover bg-center rounded-md mb-4'
            style={{
              backgroundImage: "url('images/braids/braidsSwiper2.webp')", // Replace with your image path
            }}
          ></div>
          <h2 className='mb-2 text-xl font-semibold text-white'>Ценоразпис</h2>
          <p className='text-gray-300'>
            От ежедневна небрежност до официален блясък – плитките са вашето
            универсално решение.
          </p>
        </div>

        {/* Card 3 */}
        <div className='w-full lg:w-1/3 p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
          <div
            className='h-[200px] lg:h-[300px] bg-cover bg-center rounded-md mb-4'
            style={{
              backgroundImage: "url('images/braids/braidsSwiper3.webp')", // Replace with your image path
            }}
          ></div>
          <h2 className='mb-2 text-xl font-semibold text-white'>
            Незабравим Стил
          </h2>
          <p className='text-gray-300'>
            Плитките подчертават усмивката ви и придават блясък на всеки момент
            от деня.
          </p>
        </div>
      </div>
    </div>

    // <div className='flex flex-col justify-center justify-self-center  p-6 text-center 2xl:max-w-[50%] sm:p-12'>
    //   <span className='mb-2 text-2xl font-semibold text-center sm:text-4xl '>
    //     <span className='underline-txt'>ЗА МЕН</span>
    //   </span>
    //   <h2 className='mb-6 text-xl sm:text-2xl'>Първата ми среща с плитките</h2>
    //   <ExpandableText
    //     className='text-gray-900'
    //     buttonClass='text-[#E95D7A] hover:underline'
    //     expandedText='Виж по-малко'
    //     collapsedText='Виж повече'
    //   >
    //     Моята първа среща с плитките беше като бях на 10 и плетях
    //     непрофесионално мои приятелки, но това беше страст и нищо повече. Когато
    //     станах на 16 години заминах за Слънчев бряг да работя, без да имам идеи
    //     и претенции с какво ще се занимавам. Съвсем случайно попаднах на една
    //     жена, която търсеше да назначи момиче за плетене на плитки. За мен това
    //     беше уникална възможност, защото обичах да го правя. Няма да крия колко
    //     трудно ми беше отначало и колко пъти съм стискала зъби, но страстта ми
    //     към плетенето на плитки ме поддържаше и ми даваше сили да не се откажа.
    //     И така 2 лета плетях там, а това ми помогна да се усъвършенствам, да
    //     давам всичко от себе си и най-вече да продължавам да правя, това което
    //     обичам. Години по късно заминах за Лондон. Докато живеех там винаги съм
    //     имала постоянна работа, но продължих да поддържам страстта си към
    //     плетенето. За 3 години смених няколко работни места, но плитките бяха
    //     рамо до рамо с мен и не спирах да плета във всеки свободен момент, който
    //     имах. Година и половина по-късно се зароди идеята да си имам свое
    //     собствено място, където да изразявам напълно себе си и да творя на воля.
    //     А главните “виновници” за това са моите близки и приятели и най-вече
    //     човекът до мен, без който нямаше да повярвам в себе си. Каня ви в моето
    //     арт пространство, за да усетите магията на една сбъдната мечта. Вярвам,
    //     че ще се чувствате уютно и ще си тръгнете с модерна визия, но
    //     най-важното е, че ще ви изпратя с хиляди плитки и усмивки на лице!
    //   </ExpandableText>
    // </div>
  );
};
