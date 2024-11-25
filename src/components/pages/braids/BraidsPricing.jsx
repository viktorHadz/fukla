import { useState } from 'react';

export const BraidsPricing = () => {
  const [showMoreNormal, setShowMoreNormal] = useState(false);
  const [showMoreKids, setShowMoreKids] = useState(false);

  const toggleShowMoreNormal = () => {
    setShowMoreNormal(!showMoreNormal);
  };

  const toggleShowMoreKids = () => {
    setShowMoreKids(!showMoreKids);
  };

  return (
    <section className='w-full p-4'>
      {/* Normal Pricing */}
      <div className='mb-8'>
        <h2 className='mb-6 text-3xl font-bold text-center'>Ценоразпис</h2>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Боксьорски плитки:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>2 плитки с естествена коса: 20 лева</li>
            <li>4 плитки с естествена коса: 30-40 лева</li>
            <li>6 плитки с естествена коса: 40-50 лева</li>
            <li>8 плитки с естествена коса: 50-60 лева</li>
            <li>2 плитки с канекалон: 40-50 лева</li>
            <li>4 плитки с канекалон: 60-70 лева</li>
            <li>6 плитки с канекалон: 70-80 лева</li>
            <li>8 плитки с канекалон: 80-90 лева</li>
            <li>със сърце: 50-60 лева</li>
            <li>със странични плитки: 50-60 лева</li>
          </ul>
        </div>
        {!showMoreNormal && <p className='text-center text-gray-500'>...</p>}
        {showMoreNormal && (
          <div className='mt-4'>
            {/* Additional sections */}
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Половин глава с пълзящи плитки:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с естествена коса: 20 лева</li>
                <li>с канекалон: 30-40 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Опашка от пълзящи плитки:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с естествена коса: 50-60 лева</li>
                <li>с канекалон: 70-90 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Сплитане на афроплитки:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с прежда: 250-280 лева</li>
                <li>с канекалон: 300-350 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Поставяне на туистъри:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с материали на клиента: 100 лева</li>
                <li>с материали от салона: 280 лева</li>
                <li>премахване на туистъри: 20 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>Други:</h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>Опашка от една плитка: 30-40 лева</li>
                <li>Плитка "Диадема": 10-15 лева</li>
              </ul>
            </div>
            <p className='mt-2 text-sm font-semibold text-red-500'>
              Минимална услуга 10 лева.
            </p>
            <p className='text-sm font-semibold text-red-500'>
              За всички останали модели се извършва консултация.
            </p>
          </div>
        )}
        <div className='text-center'>
          <button onClick={toggleShowMoreNormal} className='mt-4 site-button-3'>
            {showMoreNormal ? 'Прочети по-малко' : 'Прочети повече'}
          </button>
        </div>
      </div>

      {/* Kids Pricing */}
      <div className='mb-8'>
        <h2 className='mb-6 text-3xl font-bold text-center'>
          Детски ценоразпис
        </h2>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-semibold'>Боксьорски плитки:</h3>
          <ul className='ml-6 space-y-1 list-disc list-inside'>
            <li>2 плитки с естествена коса: 15 лева</li>
            <li>4 плитки с естествена коса: 25-30 лева</li>
            <li>6 плитки с естествена коса: 35-40 лева</li>
            <li>8 плитки с естествена коса: 40-45 лева</li>
            <li>2 плитки с прежда: 25-30 лева</li>
            <li>4 плитки с прежда: 30-35 лева</li>
            <li>6 плитки с прежда: 40-45 лева</li>
            <li>8 плитки с прежда: 50-55 лева</li>
            <li>2 плитки с канекалон: 30-35 лева</li>
            <li>4 плитки с канекалон: 40-45 лева</li>
            <li>6 плитки с канекалон: 50-55 лева</li>
            <li>8 плитки с канекалон: 60-65 лева</li>
          </ul>
        </div>
        {!showMoreKids && <p className='text-center text-gray-500'>...</p>}
        {showMoreKids && (
          <div className='mt-4'>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Половин глава с пълзящи плитки:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с естествена коса: 20 лева</li>
                <li>с прежда: 25-30 лева</li>
                <li>плитки с канекалон: 30-35 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>
                Опашка от пълзящи плитки:
              </h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>с естествена коса: 30 лева</li>
                <li>с прежда: 40-50 лева</li>
                <li>с канекалон: 50-60 лева</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h3 className='mb-2 text-xl font-semibold'>Други:</h3>
              <ul className='ml-6 space-y-1 list-disc list-inside'>
                <li>Плитка "Диадема": 10-15 лева</li>
              </ul>
            </div>
            <p className='mt-2 text-sm font-semibold text-red-500'>
              Минимална услуга 10 лева.
            </p>
            <p className='text-sm font-semibold text-red-500'>
              За всички останали модели се извършва консултация.
            </p>
          </div>
        )}
        <div className='text-center'>
          <button onClick={toggleShowMoreKids} className='mt-4 site-button-3'>
            {showMoreKids ? 'Прочети по-малко' : 'Прочети повече'}
          </button>
        </div>
      </div>
    </section>
  );
};
