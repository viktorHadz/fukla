export const Footer = () => {
  return (
    <footer className="footer">
      <div className="hero__text">
        <div className="hero__box">
          <h2 className="hero__text__title">Контакти</h2>
          <div className="hero__description__box">
            <a className="hero__text__desc" href="tel:+359884218445">
              T:+359 884 218 445
            </a>
            <a
              className="hero__text__desc"
              href="mailto:contact@slavinaradanova.com"
            >
              contact@slavinaradanova.com
            </a>
          </div>
        </div>
        <div className="hero__box">
          <h2 className="hero__text__title">Работно време</h2>
          <div className="hero__description__box">
            <p className="hero__text__desc">Пон до Пет: 09:00ч. - 18:00ч.</p>
            <p className="hero__text__desc">Събота: 10:00ч. - 15:00ч.</p>
            <p className="hero__text__desc">Неделя: почивен</p>
          </div>
        </div>
        <div className="hero__box">
          <h2 className="hero__text__title">Локация</h2>
          <div className="hero__description__box">
            <a
              className="hero__text__desc"
              href="https://goo.gl/maps/JyPuf91ztik3HE1r8"
            >
              Велико Търново
            </a>
            <a
              className="hero__text__desc"
              href="https://goo.gl/maps/JyPuf91ztik3HE1r8"
            >
              Пл. Пенчо Славейков 4
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Fukla</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
