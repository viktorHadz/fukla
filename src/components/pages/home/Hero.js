export const Hero = () => {
  return (
    <div className="w-full py-8 px-4 md:px-6 bg-gray-900 text-white apply-bg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold underline-txt mb-4">
            Контакти
          </h2>
          <div className="space-y-2">
            <a
              className="block hover:underline cursor-pointer"
              href="tel:+359884218445"
            >
              T:+359 884 218 445
            </a>
            <a
              className="block hover:underline cursor-pointer"
              href="mailto:contact@slavinaradanova.com"
            >
              contact@slavinaradanova.com
            </a>
          </div>
        </div>

        {/* Working Hours Section - Hidden below `sm` breakpoint */}
        <div className="hidden md:flex flex-col items-center">
          <h2 className="text-2xl font-semibold underline-txt mb-4">
            Работно време
          </h2>
          <div className="space-y-2">
            <p>Пон до Пет: 09:00ч. - 18:00ч.</p>
            <p>Събота: 10:00ч. - 15:00ч.</p>
            <p>Неделя: почивен</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold underline-txt mb-4">Локация</h2>
          <div className="space-y-2">
            <a
              className="block hover:underline cursor-pointer"
              href="https://goo.gl/maps/JyPuf91ztik3HE1r8"
            >
              Велико Търново
            </a>
            <a
              className="block hover:underline cursor-pointer"
              href="https://goo.gl/maps/JyPuf91ztik3HE1r8"
            >
              Пл. Пенчо Славейков 4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
