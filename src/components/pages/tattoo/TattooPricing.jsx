export const TattooPricing = () => {
  function readMore(dots, more, btnText) {
    // var dots = document.getElementsByClassName(dots)[0];
    // var moreText = document.getElementsByClassName(more)[0];
    // var btnText = document.getElementsByClassName(btnText)[0];
    // if (dots.style.display === 'none') {
    //   dots.style.display = 'block';
    //   btnText.innerHTML = 'Прочети повече';
    //   moreText.style.display = 'none';
    // } else {
    //   dots.style.display = 'none';
    //   btnText.innerHTML = 'Прочети по- малко';
    //   moreText.style.display = 'inline';
    // }
  }

  return (
    <section className='braidspricing'>
      <div className='braidspricing__normal'>
        <h2 className='braidspricing__title'>Ценоразпис</h2>
        <div className='braidspricing__section'>
          <h3 className='braidspricing__header'>Грим:</h3>
          <ul className='braidspricing__information'>
            <li>Дневен грим: 35 лева</li>
            <li>Вечерен грим: 45 лева</li>
            <li>Официален грим: 60 лева</li>
            <li>Пробен грим: 40 лева</li>
            <li>Арт грим: 70-90 лева</li>
            <li>Детски парти грим: 30 лева</li>
            <li>Мъжки грим: 30 лева</li>
          </ul>
          <p className='dots'>...</p>
          <span className='more'>
            <ul className='braidspricing__information makeup__pricing'>
              <li>Почистване и оформяне на вежди: 8 лева</li>
              <li>Боядисване на вежди: 10 лева</li>
              <li>Поставяне на мигли: 10 лева</li>
              <li>С мигли на клиента: 5 лева</li>
            </ul>
          </span>
        </div>
        <button
          onClick={() => readMore('dots', 'more', 'readmore__btn')}
          className='readmore__btn'
        >
          Прочети повече
        </button>
      </div>
    </section>
  );
};
