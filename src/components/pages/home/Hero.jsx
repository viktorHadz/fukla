export const Hero = () => {
  return (
    <>
      <div className='flex flex-col mb-6'>
        <h2 className='mb-4 text-2xl font-semibold text-zinc-950'>Контакти</h2>
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
      <div className='flex flex-col mb-6'>
        <h2 className='mb-4 text-2xl font-semibold text-zinc-950'>
          Работно време
        </h2>
        <div className='space-y-2'>
          <p>Пон до Пет: 09:00ч. - 18:00ч.</p>
          <p>Събота: 10:00ч. - 15:00ч.</p>
          <p>Неделя: почивен</p>
        </div>
      </div>
      {/* Location Section */}
      <div className='flex flex-col mb-6'>
        <h2 className='mb-4 text-2xl font-semibold text-zinc-950'>Локация</h2>
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
    </>
  );
};
