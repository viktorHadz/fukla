export const BraidsPricing = () => {
  function readMore(dots, more, btnText) {
    var dots = document.getElementsByClassName(dots)[0];
    var moreText = document.getElementsByClassName(more)[0];
    var btnText = document.getElementsByClassName(btnText)[0];

    if (dots.style.display === "none") {
      dots.style.display = "block";
      btnText.innerHTML = "Прочети повече";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Прочети по- малко";
      moreText.style.display = "inline";
    }
  }

  return (
    <section className="braidspricing">
      <div className="braidspricing__normal">
        <h2 className="braidspricing__title">Ценоразпис</h2>
        <div className="braidspricing__section">
          <h3 className="braidspricing__header">Боксьорски плитки:</h3>
          <ul className="braidspricing__information">
            <li>2 плитки с естествена коса: 20 лева</li>
            <li>4 плитки с естествена коса: 30-40 лева</li>
            <li>6 плитки с естествена коса: 40-50 лева</li>
            <li>8 плитки с естествена коса: 50-60 лева</li>
            <li>2 плитки с кианекалон: 40-50 лева</li>
            <li>4 плитки с канекалон: 60-70 лева</li>
            <li>6 плитки с канекалон: 70-80 лева</li>
            <li>8 плитки с канекалон: 80-90 лева</li>
            <li>със сърце: 50-60 лева</li>
            <li>със странични плитки: 50-60 лева</li>
          </ul>
        </div>
        <p className="dots">...</p>
        <span className="more">
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">
              Половин глава с пълзящи плитки:
            </h3>
            <ul className="braidspricing__information">
              <li>с естествена коса: 20 лева</li>
              <li>с канекалон: 30-40 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Опашка от пьлзящи плитки:</h3>
            <ul className="braidspricing__information">
              <li>с естествена коса: 50-60 лева</li>
              <li>с канекалон: 70-90 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Сплитане на афроплитки:</h3>
            <ul className="braidspricing__information">
              <li>с прежда: 250-280 лева</li>
              <li>с канекаон: 300-350 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Поставяне на туистъри:</h3>
            <ul className="braidspricing__information">
              <li>с материали на клиента: 100 лева</li>
              <li>с материали от салона: 280 лева</li>
              <li>премахване на туистъри: 20 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Други:</h3>
            <ul className="braidspricing__information">
              <li>Опашка от една плитка: 30-40 лева</li>
              <li>Плитка "Диадема": 10-15 лева</li>
            </ul>
          </div>
          <p className="braidspricing__warning braidspricing__warning__first">
            Минимална услуга 10 лева.
          </p>
          <p className="braidspricing__warning">
            За всички останали модели се извършва консултация.
          </p>
        </span>
        <button
          onClick={() => readMore("dots", "more", "readmore__btn")}
          className="readmore__btn"
        >
          Прочети повече
        </button>
      </div>

      <div className="braidspricing__kids">
        <h2 className="braidspricing__title">Детски ценораспис</h2>
        <div className="braidspricing__section">
          <h3 className="braidspricing__header">Боксьорски плитки:</h3>
          <ul className="braidspricing__information">
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
        <p className="dots dots__kids">...</p>
        <span className="more__kids">
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">
              Половин глава с пълзящи плитки:
            </h3>
            <ul className="braidspricing__information">
              <li>с естествена коса: 20 лева</li>
              <li>с прежда: 25-30 лева</li>
              <li>плитки с канекалон: 30-35 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Опашка от пьлзящи плитки:</h3>
            <ul className="braidspricing__information">
              <li>с естествена коса: 30 лева</li>
              <li>с прежда: 40-50 лева</li>
              <li>с канекалон: 50-60 лева</li>
            </ul>
          </div>
          <div className="braidspricing__section">
            <h3 className="braidspricing__header">Други:</h3>
            <ul className="braidspricing__information">
              <li>Плитка "Диадема": 10-15 лева</li>
            </ul>
          </div>
          <p className="braidspricing__warning braidspricing__warning__first">
            Минимална услуга 10 лева.
          </p>
          <p className="braidspricing__warning">
            За всички останали модели се извършва консултация.
          </p>
        </span>
        <button onClick={() => readMore("dots__kids", "more__kids", "readmore__btn__kids")} className="readmore__btn readmore__btn__kids">Прочети повече</button>
      </div>
    </section>
  );
};
