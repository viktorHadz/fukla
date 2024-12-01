export const BraidsPricing = () => {
  return (
    <section className='w-full p-4'>
      {/* Pricing Section */}
      <div className='mb-8'>
        <h2 className='mb-6 text-3xl font-bold text-center'>Ценоразпис</h2>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Диадема:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>С естествена коса: 20 лева</li>
            <li>С канекалон: 25 лева</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Класическа плитка:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>50 лева</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Боксьорски плитки:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>2 плитки с естествена коса: 30 лева</li>
            <li>2 плитки с канекалон: 60 лева</li>
            <li>4 плитки с естествена коса: 50 лева</li>
            <li>4 плитки с канекалон: 70 лева</li>
            <li>6 плитки с естествена коса: 70 лева</li>
            <li>6 плитки с канекалон: 90 лева</li>
            <li>8 плитки с естествена коса: 80 лева</li>
            <li>8 плитки с канекалон: 100 лева</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Поставяне на туистъри:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>С включени материали: 280 лева</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Поставяне на къдрици:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>С включени материали: 280 лева</li>
          </ul>
        </div>
        <p className='mt-2 text-sm font-semibold text-red-500'>
          /канекалон - изкуствена коса/
        </p>
      </div>
    </section>
  );
};
