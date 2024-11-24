export const Footer = () => {
  return (
    <footer className='footer bg-dark-gradient'>
      <div className='w-full px-4 py-8 text-white md:px-6'>
        <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3'>
          {/* Contact Section */}
          <div className='flex flex-col items-center'>
            <h2 className='mb-4 text-2xl font-semibold underline-txt'>
              Контакти
            </h2>
            <div className='space-y-2'>
              <a
                className='block cursor-pointer hover:underline'
                href='tel:+359884218445'
              >
                T:+359 884 218 445
              </a>
              <a
                className='block cursor-pointer hover:underline'
                href='mailto:contact@slavinaradanova.com'
              >
                contact@slavinaradanova.com
              </a>
            </div>
          </div>

          {/* Working Hours Section - Hidden below `sm` breakpoint */}
          <div className='flex-col items-center hidden md:flex'>
            <h2 className='mb-4 text-2xl font-semibold underline-txt'>
              Работно време
            </h2>
            <div className='space-y-2'>
              <p>Пон до Пет: 09:00ч. - 18:00ч.</p>
              <p>Събота: 10:00ч. - 15:00ч.</p>
              <p>Неделя: почивен</p>
            </div>
          </div>

          {/* Location Section */}
          <div className='flex flex-col items-center'>
            <h2 className='mb-4 text-2xl font-semibold underline-txt'>
              Локация
            </h2>
            <div className='space-y-2'>
              <a
                className='block cursor-pointer hover:underline'
                href='https://goo.gl/maps/JyPuf91ztik3HE1r8'
              >
                Велико Търново
              </a>
              <a
                className='block cursor-pointer hover:underline'
                href='https://goo.gl/maps/JyPuf91ztik3HE1r8'
              >
                Пл. Пенчо Славейков 4
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='copyright'>
          &copy; Copyright <strong>Fukla</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
