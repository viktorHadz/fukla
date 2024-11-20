import { ExpandableText } from '../../common/ExpandableText';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Optional: For autoplay functionality

export const BraidsWelcome = () => {
  return (
    <div className='relative w-full'>
      {/* Background for large screens */}
      <div className='absolute inset-0 hidden bg-white lg:block -z-10'></div>

      {/* Content container */}
      <div className='flex flex-col lg:flex-row lg:max-w-[70%] mx-auto items-center gap-6 px-6 py-12 lg:px-16'>
        {/* Left Section: Image */}
        <div
          className='w-full lg:w-1/2 h-[200px] lg:h-[300px] 2xl:h-[450px] 4xl:h-[300px] bg-cover bg-center rounded-lg'
          style={{
            backgroundImage: "url('images/braids/braidsSwiper4.webp')", // Replace with your image path
          }}
        ></div>

        {/* Right Section: Text */}
        <div className='w-full p-6 text-center bg-[#18181b] rounded-lg shadow-md lg:p-12 lg:text-left lg:w-1/2'>
          <h2 className='mb-4 text-2xl font-semibold text-white lg:text-3xl'>
            Плитката като универсален стил
          </h2>
          <p className='hidden mb-4 text-lg text-gray-300 2xl:block'>
            Плитките не са просто практично решение за премахване на косата от
            лицето ви – те са начин да изразите стил и увереност. С тях печелите
            време за важните неща, като едновременно постигате мечтаната визия и
            дълга коса. Те безпроблемно преминават от ежедневна небрежност към
            подчертана елегантност, допълвайки и най-официалния тоалет. Плитките
            внасят блясък в очите ви, цвят в косите и подчертават вашата
            естествена усмивка.
            <br />
            <span className='font-semibold'>
              Оставете плитките да говорят за вашия стил!
            </span>
          </p>
          <ExpandableText
            className='block mb-4 text-lg text-gray-300 2xl:hidden'
            previewLines={3}
            buttonClass='mt-4 px-6 py-2 bg-white text-[#18181b] rounded-lg hover:bg-[#e95d7a] hover:text-white transition-all block 2xl:hidden'
            expandedText='Виж по-малко'
            collapsedText='Виж повече'
          >
            Плитките не са просто практично решение за премахване на косата от
            лицето ви – те са начин да изразите стил и увереност. С тях печелите
            време за важните неща, като едновременно постигате мечтаната визия и
            дълга коса. Те безпроблемно преминават от ежедневна небрежност към
            подчертана елегантност, допълвайки и най-официалния тоалет. Плитките
            внасят блясък в очите ви, цвят в косите и подчертават вашата
            естествена усмивка.
            <br />
            <span className='text-gray-200'>
              Оставете плитките да говорят за вашия стил!
            </span>
          </ExpandableText>
        </div>
      </div>
    </div>
  );
};
