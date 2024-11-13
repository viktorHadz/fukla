import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <>
      <section className="w-full py-12 my-20 text-white apply-bg">
        <div className="flex flex-col items-center px-6 mx-auto md:flex-row md:items-start max-w-7xl sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/braids.webp"
              alt="Braids"
            />
          </div>
          <div className="w-3/4 mx-auto mt-6 md:w-2/3 md:pl-10 md:mt-0">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4">
              Плитки
            </h2>
            <p className="mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6">
              Косата е короната, която никога не сваляте и с правилната грижа и
              оформяне тя може да бъде блестящо свидетелство за вашата красота и
              увереност.
            </p>
            <p className="hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8">
              Косата е отражение на това кой сте и какво представлявате, а с
              правилния стил тя може да бъде мощен израз на вашата идентичност.
            </p>
            <Link
              to="/braids"
              className="inline-block text-sm site-button first-letter:capitalize md:text-base"
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>
      {/* MARK: Hair Thread */}
      <section className="w-full py-12 my-20 text-white apply-bg">
        <div className="flex flex-col items-center px-6 mx-auto md:flex-row md:items-start max-w-7xl sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src=""
              alt="Hair Extensions"
            />
          </div>
          <div className="w-3/4 mx-auto mt-6 md:w-2/3 md:pl-10 md:mt-0">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4">
              Прежда за Плитки
            </h2>
            <p className="mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6">
              Преждата за плитки е идеалният начин да внесете цвят и текстура
              във вашата прическа, добавяйки нови измерения на вашия стил.
            </p>
            <p className="hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8">
              Тази техника е идеален избор за онези, които искат да изразят
              своята индивидуалност с ярък и впечатляващ акцент.
            </p>
            {/* MARK: TODO New page needed */}
            <Link
              to="/nails"
              className="inline-block text-sm site-button first-letter:capitalize md:text-base"
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>

      {/* MARK:Temporary Tatoos */}
      <section className="w-full py-12 my-20 text-white apply-bg">
        <div className="flex flex-col items-center px-6 mx-auto md:flex-row-reverse md:items-start max-w-7xl sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/"
              alt="Temporary Tatoos"
            />
          </div>
          <div className="w-3/4 mx-auto mt-6 md:w-2/3 md:pr-10 md:mt-0">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4">
              Временни Татуировки
            </h2>
            <p className="mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6">
              Временните татуировки са начин да изразите своята креативност и
              уникалност, без да правите постоянен ангажимент.
            </p>
            <p className="hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8">
              От смели и привличащи вниманието до деликатни и едва
              забележими.Тази форма на изкуство е перфектен избор за тези, които
              обичат да експериментират и искат да изпробват нови идеи за
              самоизразяване.
            </p>
            {/* MARK: TODO: New page needed */}
            <Link
              to="/makeup"
              className="inline-block text-sm site-button first-letter:capitalize md:text-base"
            >
              виж още
            </Link>
          </div>
        </div>
      </section>
      {/* MARK: Makeup - REMOVE*/}
      <section className="w-full py-12 my-20 text-white apply-bg">
        <div className="flex flex-col items-center px-6 mx-auto md:flex-row-reverse md:items-start max-w-7xl sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/makeup.webp"
              alt="Makeup"
            />
          </div>
          <div className="w-3/4 mx-auto mt-6 md:w-2/3 md:pr-10 md:mt-0">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4">
              Грим
            </h2>
            <p className="mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6">
              Гримът не е маска, която прикрива вашата красота, това е оръжие,
              което ви помага да изразите коя сте отвътре.
            </p>
            <p className="hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8">
              Красотата на грима е, че може да се използва за подчертаване на
              естествената красота, която вече съществува, вместо да се опитва
              да я прикрие или промени напълно.
            </p>
            <Link
              to="/makeup"
              className="inline-block text-sm site-button first-letter:capitalize md:text-base"
            >
              търси се
            </Link>
          </div>
        </div>
      </section>
      {/* MARK: Nails */}
      <section className="w-full py-12 my-20 text-white apply-bg">
        <div className="flex flex-col items-center px-6 mx-auto md:flex-row md:items-start max-w-7xl sm:px-20 2xl:px-0 2xl:gap-16">
          <div className="w-full md:w-1/3">
            <img
              className="w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#E95D7A] mx-auto"
              src="/images/home/nails.webp"
              alt="Nails"
            />
          </div>
          <div className="w-3/4 mx-auto mt-6 md:w-2/3 md:pl-10 md:mt-0">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4">
              Маникюр
            </h2>
            <p className="mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6">
              Маникюрът е като бижу за вашите ръце, той добавя блясък и красота
              към вашия външен вид.
            </p>
            <p className="hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8">
              Маникюрът е форма на изкуство и с правилните инструменти и техники
              можете да създавате красиви и уникални дизайни.
            </p>
            <Link
              to="/nails"
              className="inline-block text-sm site-button first-letter:capitalize md:text-base"
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
