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


              {/* New Element */}
              <div className="flex items-center justify-center w-full h-full transition duration-300 brightness-75 hover:brightness-100">
  <div className="card-left bright group z-10 mt-20 flex h-[480px] w-[380px] shrink-0 -rotate-12 transform flex-col gap-4 rounded-md border bg-zinc-900 p-4 text-white transition duration-300 ease-in-out hover:-translate-x-1/3 hover:-translate-y-10 hover:rotate-0 hover:scale-105 hover:bg-[#e95d7a] ">
    <div className="flex h-[65%] items-center justify-center rounded-md border border-white bg-gray-200 bg-cover text-black">picture box</div>
    <h2 className="text-3xl">За Нас</h2>
    <div className="h-[20%] overflow-y-scroll">
      <p className="mr-2 text-sm h-fit">Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up!</p>
    </div>
    <div className="max-w-fit">
      <button className="p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all">press me</button>
    </div>
  </div>


  <div className="card-center z-40 flex h-[500px] w-[400px] shrink-0 flex-col gap-4 rounded-md border bg-zinc-900 p-4 text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-[#e95d7a]">
    <div className="flex h-[65%] items-center justify-center rounded-md border border-white bg-gray-200 bg-cover text-black">picture box</div>
    <h2 className="text-3xl">Ценоразпис</h2>
    <div className="h-[20%] overflow-y-scroll">
      <p className="mr-2 text-sm h-fit">Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up!</p>
    </div>
    <div className="max-w-fit">
      <button className="p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all">press me</button>
    </div>
  </div>


  <div className="card-right z-10 mt-20 flex h-[480px] w-[380px] shrink-0 rotate-12 transform flex-col gap-4 rounded-md border bg-zinc-900 p-4 text-white transition duration-300 ease-in-out will-change-transform hover:translate-x-1/3 hover:rotate-0 hover:scale-105 hover:bg-[#e95d7a] hover:-translate-y-10">
    <div className="flex h-[65%] items-center justify-center rounded-md border border-white bg-gray-200 bg-cover text-black">picture box</div>
    <h2 className="text-3xl">Галерия</h2>
    <div className="h-[20%] overflow-y-scroll">
      <p className="mr-2 text-sm h-fit">Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up! Small message to give it to the people maan. Johny give em the shpiel right there man you know whats up!</p>
    </div>
    <div className="max-w-fit">
      <button className="p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all">press me</button>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};


