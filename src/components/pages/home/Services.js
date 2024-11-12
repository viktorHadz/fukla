import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <>
      <section className="w-full apply-bg text-white py-12 my-20">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 sm:w-3/4 md:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/braids.webp"
              alt="Braids"
            />
          </div>
          <div className="w-3/4 md:w-2/3 md:pl-10 mt-6 md:mt-0 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold underline-txt mb-4 md:mb-6">
              Плитки
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
              Косата е короната, която никога не сваляте и с правилната грижа и
              оформяне тя може да бъде блестящо свидетелство за вашата красота и
              увереност.
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Косата е отражение на това кой сте и какво представлявате, а с
              правилния стил тя може да бъде мощен израз на вашата идентичност.
            </p>
            <Link
              to="/braids"
              className="inline-block site-button first-letter:capitalize text-sm md:text-base"
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full apply-bg text-white py-12 my-20">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 sm:w-3/4 md:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/makeup.webp"
              alt="Makeup"
            />
          </div>
          <div className="w-3/4 md:w-2/3 md:pr-10 mt-6 md:mt-0 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold underline-txt mb-4 md:mb-6">
              Грим
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
              Гримът не е маска, която прикрива вашата красота, това е оръжие,
              което ви помага да изразите коя сте отвътре.
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Красотата на грима е, че може да се използва за подчертаване на
              естествената красота, която вече съществува, вместо да се опитва
              да я прикрие или промени напълно.
            </p>
            <Link
              to=""
              className="inline-block site-button first-letter:capitalize text-sm md:text-base"
            >
              търси се
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full apply-bg text-white py-12 my-20">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 sm:w-3/4 md:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/nails.webp"
              alt="Nails"
            />
          </div>
          <div className="w-3/4 md:w-2/3 md:pl-10 mt-6 md:mt-0 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold underline-txt mb-4 md:mb-6">
              Маникюр
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
              Маникюрът е като бижу за вашите ръце, той добавя блясък и красота
              към вашия външен вид.
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Маникюрът е форма на изкуство и с правилните инструменти и техники
              можете да създавате красиви и уникални дизайни.
            </p>
            <Link
              to="/nails"
              className="inline-block site-button first-letter:capitalize text-sm md:text-base"
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
