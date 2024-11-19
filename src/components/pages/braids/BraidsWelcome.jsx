// import { ExpandableText } from '../../common/ExpandableText';
// // flex flex-col p-12 text-center lg:max-w-[50%] sm:p-12 xl:p-20
// export const BraidsWelcome = () => {
//   return (
//     <section
//       className='grid w-full h-auto grid-cols-1 p-8 md:grid-cols-2 md:p-12 xl:p-20'
//       id='braids-welcome'
//     >
//       {/* Text Column */}
//       <div className='flex flex-col justify-center p-4 text-center md:text-left md:p-8'>
//         <span className='mb-6 text-2xl font-semibold sm:text-4xl'>
//           <span className='underline-txt'>ЗАЩО</span>{' '}
//           <span className='underline-txt'>ПЛИТКИ?</span>
//         </span>
//         <h2 className='mb-6 text-xl sm:text-2xl'>
//           Удобство да се събуждаш красива.
//         </h2>
//         <p className='hidden md:block'>
//           Сплитането на косата дава възможност да разполагаш с времето си за
//           всичко останало. Едновременно постигаш промяна във визията си и
//           мечтаната дълга коса. Плитката не е просто практичен начин да
//           премахнете косата от лицето си, докато се опитвате да свършите всички
//           задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
//           допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
//           усмивката е на лице!
//         </p>
//         <ExpandableText
//           className='text-gray-900 md:hidden'
//           buttonClass='text-[#E95D7A] md:hidden hover:underline'
//           previewLines={3}
//           expandedText='Виж по-малко'
//           collapsedText='Виж повече'
//         >
//           Сплитането на косата дава възможност да разполагаш с времето си за
//           всичко останало. Едновременно постигаш промяна във визията си и
//           мечтаната дълга коса. Плитката не е просто практичен начин да
//           премахнете косата от лицето си, докато се опитвате да свършите всички
//           задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
//           допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
//           усмивката е на лице!
//         </ExpandableText>
//       </div>

//       {/* Image Column */}
//       <div className='relative flex items-center justify-center w-full'>
//         <img
//           className='object-contain h-auto rounded-md max-w-none'
//           src='/images/braids/BraidsWhyBraids.webp'
//           alt='Braided hairstyle'
//           style={{
//             width: '370px', // Match the intrinsic width
//             height: 'auto',
//           }}
//         />
//       </div>
//     </section>
//   );
// };
import { ExpandableText } from '../../common/ExpandableText';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Optional: For autoplay functionality
import { Autoplay } from 'swiper/modules';

export const BraidsWelcome = () => {
  const images = [
    'images/braids/braidsSwiper1.webp',
    'images/braids/braidsSwiper2.webp',
    'images/braids/braidsSwiper3.webp',
    'images/braids/braidsSwiper4.webp',
    'images/braids/braidsSwiper5.webp',
  ];

  return (
    <section
      className='grid w-full h-auto grid-cols-1 p-8 md:grid-cols-2 md:p-12 xl:p-20'
      id='braids-welcome'
    >
      {/* Text Column */}
      <div className='flex flex-col justify-center p-4 text-center md:text-left md:p-8'>
        <span className='mb-6 text-2xl font-semibold sm:text-4xl'>
          <span className='underline-txt'>ЗАЩО</span>{' '}
          <span className='underline-txt'>ПЛИТКИ?</span>
        </span>
        <h2 className='mb-6 text-xl sm:text-2xl'>
          Удобство да се събуждаш красива.
        </h2>
        <p className='hidden md:block'>
          Сплитането на косата дава възможност да разполагаш с времето си за
          всичко останало. Едновременно постигаш промяна във визията си и
          мечтаната дълга коса. Плитката не е просто практичен начин да
          премахнете косата от лицето си, докато се опитвате да свършите всички
          задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
          допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
          усмивката е на лице!
        </p>
        <ExpandableText
          className='text-gray-900 md:hidden'
          buttonClass='text-[#E95D7A] md:hidden hover:underline'
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

      {/* Swiper Column */}
      <div className='relative flex items-center justify-center w-full'>
        <Swiper
          modules={[Autoplay]} // Enable autoplay module
          autoplay={{
            delay: 3000, // Auto-swipe every 3 seconds
            disableOnInteraction: false,
          }}
          loop={true} // Infinite looping
          className='w-full max-w-full max-h-[700px] !bg-transparent rounded-md' // Set height and allow width to stretch
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Braided hairstyle ${index + 1}`}
                className='object-cover w-full max-h-[700px] rounded-md'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
