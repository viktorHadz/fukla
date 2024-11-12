import { Link } from 'react-router-dom';

export const BraidsWelcome = () => {
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
        <section className="braidswelcome">
            <div className="braidswelcome__text">
                <span className="braidswelcome__span">ЗАЩО ПЛИТКИ?</span>
                <h2 className="braidswelcome__label">Удобство да се събуждаш красива.</h2>
                <p className="braidswelcome__paragraph">Сплитането на косата дава възможност да разполагаш с времето си за всичко останало. Едновременно постигаш промяна във визията си и мечтаната дълга коса. Плитката не е просто практичен начин да премахнете косата от лицето си, докато се опитвате да свършите всички задачи през горещия ден. Тя също е страхотен външен вид, когато бъде допълнена от по-официален тоалет. Блясък в очите, цвят в косите и усмивката е на лице!</p>
            </div>
            <section className="braidshero">
                <div className="braidshero__images">
                    <div className="braidshero__container">
                        <img className="braidshero__image" src="images/services/4.webp" alt="Service" loading="lazy" />
                    </div>
                    <div className="braidshero__container">
                        <img className="braidshero__image" src="images/services/5.webp" alt="Service" loading="lazy" />
                    </div>
                    <div className="braidshero__container">
                        <img className="braidshero__image" src="images/services/6.webp" alt="Service" loading="lazy" />
                    </div>
                </div>
            </section>
            <div className="braidswelcome__text">
                <span className="braidswelcome__span">ЗА МЕН</span>
                <h2 className="braidswelcome__label">Първата ми среща с плитките</h2>
                <p className="braidswelcome__paragraph">Моята първа среща с плитките беше като бях на 10 и плетях непрофесионално мои приятелки, но това беше страст и нищо повече. Когато станах на 16 години заминах за Слънчев бряг да работя, без да имам идеи и претенции с какво ще се занимавам.
                <span className="dots__about">...</span>
                <span className="more__about">Съвсем случайно попаднах на една жена, която търсеше да назначи момиче за плетене на плитки. За мен това беше уникална възможност, защото обичах да го правя. Няма да крия колко трудно ми беше отначало и колко пъти съм стискала зъби, но страстта ми към плетенето на плитки ме поддържаше и ми даваше сили да не се откажа. И така 2 лета плетях там, а това ми помогна да се усъвършенствам, да давам всичко от себе си и най-вече да продължавам да правя, това което обичам. Години по късно заминах за Лондон. Докато живеех там винаги съм имала постоянна работа, но продължих да поддържам страстта си към плетенето. За 3 години смених няколко работни места, но плитките бяха рамо до рамо с мен и не спирах да плета във всеки свободен момент, който имах. Година и половина по-късно се зароди идеята да си имам свое собствено място, където да изразявам напълно себе си и да творя на воля. А главните “виновници” за това са моите близки и приятели и най-вече човекът до мен, без който нямаше да повярвам в себе си. Каня ви в моето арт пространство, за да усетите магията на една сбъдната мечта. Вярвам, че ще се чувствате уютно и ще си тръгнете с модерна визия, но най-важното е, че ще ви изпратя с хиляди плитки и усмивки на лице!</span></p>
                <button
                onClick={() => readMore("dots__about", "more__about", "readmore__about")}
                className="readmore__about"
                >
                Прочети повече
                </button>
            </div>
        </section>
    );
};