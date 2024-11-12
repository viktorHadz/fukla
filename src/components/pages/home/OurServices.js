export const OurServices = () => {
  return (
    <section className="flex flex-col items-center w-full p-12 sm:p-18">
      <h2 className="underline-txt text-4xl md:text-5xl text-center mb-12 sm:mb-10">
        Какво предлагаме?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-28 lg:gap-32 text-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              className="max-w-full max-h-full"
              src="./images/home/icons/braidServices.svg"
              alt="Braid Services"
            />
          </div>
          <h3 className="text-lg md:text-xl mt-2">Плитки</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              className="max-w-full max-h-full"
              src="./images/home/icons/braidsForSale.svg"
              alt="Colored Braids"
            />
          </div>
          <h3 className="text-lg md:text-xl mt-2">
            Прежда за <br /> Плитки
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              className="max-w-full max-h-full"
              src="./images/home/icons/nails.svg"
              alt="Nail Services"
            />
          </div>
          <h3 className="text-lg md:text-xl mt-2">Маникюр</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              className="max-w-full max-h-full"
              src="./images/home/icons/tatoo.svg"
              alt="Tattoo Services"
            />
          </div>
          <h3 className="text-lg md:text-xl mt-2">
            Временни <br /> Татуировки
          </h3>
        </div>
      </div>
    </section>
  );
};
