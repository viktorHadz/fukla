// import { ExpandableText } from '../../common/ExpandableText';
export const BraidsDivider = () => {
  return (
    <div className='relative w-full'>
      {/* Background for large screens */}
      <div className='absolute inset-0 hidden bg-white lg:block -z-10'></div>

      {/* Content container */}
      <div className='relative flex flex-col items-center gap-6 px-6 py-12 mx-auto lg:px-16'>
        {/* For small screens, display cards in a column */}
        <div className='flex flex-col w-full gap-6 lg:hidden'>
          {/* Card 1 */}
          <div className='w-full p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
            <div
              className='h-[200px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper1.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold text-white'>За Мен</h2>
            <p className='text-gray-300'>
              Открийте как плитките могат да преобразят вашата визия и да
              подчертаят естествената ви красота.
            </p>
          </div>

          {/* Card 2 */}
          <div className='w-full p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
            <div
              className='h-[200px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper2.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold text-white'>Ценоразпис</h2>
            <p className='text-gray-300'>
              От ежедневна небрежност до официален блясък – плитките са вашето
              универсално решение.
            </p>
          </div>

          {/* Card 3 */}
          <div className='w-full p-6 bg-[#18181b] rounded-lg shadow-md text-center'>
            <div
              className='h-[200px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper3.webp')",
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

        {/* For large screens, display cards as a deck */}
        <div className='relative hidden w-full h-[600px] items-center lg:flex'>
          {/* Card 1 */}
          <div
            className='absolute w-[300px]  p-6 bg-[#18181b] rounded-lg shadow-md text-center transform -rotate-6 transition-transform duration-300 hover:rotate-0  cursor-pointer hover:scale-110 hover:bg-[#e95d7a] border hover:left-0'
            style={{ left: '20%', top: '10%', zIndex: 1 }}
          >
            <div
              className='h-[300px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper1.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold text-white'>За Мен</h2>
            <p className='text-gray-300'>
              Открийте как плитките могат да преобразят вашата визия и да
              подчертаят естествената ви красота.
            </p>
          </div>

          {/* Card 2 - central card */}
          <div
            className='absolute w-[300px] h-[600px]  p-6 bg-[#18181b] rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-110 hover:bg-[#e95d7a] border cursor-pointer'
            style={{ left: '35%', top: '0%', zIndex: 2 }}
          >
            <div
              className='h-[300px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper2.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold text-white'>Ценоразпис</h2>
            <p className='text-gray-300'>
              От ежедневна небрежност до официален блясък – плитките са вашето
              универсално решение.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className='absolute w-[300px]  p-6 bg-[#18181b] rounded-lg shadow-md text-center transform rotate-6 transition-transform duration-300 hover:rotate-0  cursor-pointer hover:scale-110 hover:bg-[#e95d7a] border'
            style={{ left: '50%', top: '10%', zIndex: 1 }}
          >
            <div
              className='h-[300px] bg-cover bg-center rounded-md mb-4'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper3.webp')",
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
    </div>
  );
};


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