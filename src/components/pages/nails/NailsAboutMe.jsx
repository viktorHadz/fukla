import { DialogPopUp } from '../../common/DialogPopUp';

export const NailsAboutMe = () => {
  return (
    <div className='p-2 py-24 bg-white'>
      {/* Heading Section */}
      <div className='max-w-2xl mx-auto text-left'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Запознайте се с Галиана
        </h2>
        <p className='mt-2 text-base leading-7 text-gray-600'>
          С уникален стил и професионален подход, Галиана превръща всяка среща в
          изкуство.
        </p>
      </div>

      {/* Image with Glow */}
      <div className='relative flex justify-center my-12 '>
        {/* Glow Effect */}
        <div
          className='absolute z-0 w-56 h-56 rounded-full bg-pinkv blur-2xl'
          content=''
        ></div>
        {/* Image */}
        <div className='z-10 border-b-2 rounded-lg border-l-gray-950'>
          <img
            className='object-cover w-48 h-64 rounded-lg'
            src='/images/nails/aboutMeGaliana.webp'
            alt='Галиана'
          />
        </div>
      </div>

      {/* Description Section */}
      <div className='max-w-2xl mx-auto text-left'>
        <p className='mb-4 text-base leading-6 text-gray-600'>
          Аз съм Галиана и се занимавам професионално с маникюр и педикюр повече
          от 3 години. Това не е просто работа за мен – това е моята страст,
          моят талант и моето вдъхновение! Ако искате да изглеждате ослепително
          от глава до пети и да се потопите във вълшебството на моето изкуство,
          както и на целия ни екип, заповядайте при нас!
        </p>
        <DialogPopUp
          buttonText='Свържете се'
          pannelClass='w-[200px]'
          textClass=''
          customText={
            <>
              <strong>Телефон за връзка: </strong>
              <span>+359 87 7150902 </span>
            </>
          }
        ></DialogPopUp>
      </div>
    </div>
  );
};
