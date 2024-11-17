export const NailsPricing = () => {
  function readMore(dots, more, btnText) {
    // var dots = document.getElementsByClassName(dots)[0];
    // var moreText = document.getElementsByClassName(more)[0];
    // var btnText = document.getElementsByClassName(btnText)[0];
    // if (dots.style.display === "none") {
    //   dots.style.display = "block";
    //   btnText.innerHTML = "Прочети повече";
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Прочети по- малко";
    //   moreText.style.display = "inline";
    // }
  }

  return (
    <section className='braidspricing'>
      <div className='braidspricing__normal'>
        <h2 className='braidspricing__title'>Ценоразпис</h2>
        <div className='braidspricing__section'>
          <ul className='braidspricing__information'>
            <li>Лакиране с обикновен лак: 10лв.</li>
            <li>СПА маникюр: 15лв. (виж най- отдолу)</li>
            <li>СПА маникюр с обикновен лак: 20лв.</li>
            <li>Маникюр с гел лак: ЗОлв.</li>
            <li>СПА маникюр с гел лак: 40лв.</li>
            <li>СПА маникюр с парафивова терапия: 25 лв.</li>
            <li>СПА педикюр без лак: 20 лв.</li>
          </ul>
        </div>
        <p className='dots'>...</p>
        <span className='more'>
          <div className='braidspricing__section nails__pricing'>
            <ul className='braidspricing__information nails__pricing'>
              <li>СПА педикюр с обикновен лак: 25лв.</li>
              <li>СПА педикюр с гел лак: 40лв.</li>
              <li>Лакиране на крака с гел лак: ЗОлв.</li>
              <li>
                (оформяне на ноктите, почистване на кожички и кутикули,олио за
                кожички)
              </li>
              <li>СПА педикюр с парафинова терапия*: 30 лв.</li>
              <li>Укрепване на естествени нокти с гел/полигел: 35лв.</li>
              <li>
                Удължаване на ноктите с гел/полигел чрез удължители: 50лв.
              </li>
              <li>Изграждане с форма чрез гел/ полигел: 60лв.</li>
              <li>Поддръжка на гел/полигел: 40лв.</li>
              <li>Сваляне на гел/полигел: 15лв.</li>
              <li>Сваляне на гел лак: 5лв.</li>
              <li>Поправка на 1 нокет: 4лв.</li>
            </ul>
          </div>
          <p className='braidspricing__warning braidspricing__warning__first'>
            *СПА маникюр-потапяне на ръцете в топла вода с ароматни соли,
            оформяне на нокета, отстраняване на кутукула и кожичките,пилинг
            маска,крем,масаж,подхранване на кожичките с олио.
          </p>
          <p className='braidspricing__warning'>
            *СПА педикюр- топла вана с ароматни соли,оформяне на
            нокета,почистване на кутикули,кожички,пети,пилинг
            маска,крем,масаж,подхранващо олио за кожички.
          </p>
          <p className='braidspricing__warning'>
            *Парафинова терапия-извършна се с професионална свещ,разтопена и
            поставена върху ръцете/ краката. След премахването на
            парафина,резултата е изключително нежна,подхранена кожа и подобрена
            еластичност на нокетната плочка
          </p>
        </span>
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
