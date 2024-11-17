import React, { useState, useRef } from 'react';

export const Expandable = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='mb-4 overflow-hidden border border-gray-300 rounded-lg'>
      <button
        className='flex items-center justify-between w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200'
        onClick={toggleExpand}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        className='overflow-hidden transition-all duration-300'
        style={{
          height: isExpanded ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className='p-4 bg-white'>{children}</div>
      </div>
    </div>
  );
};

// Here is an example usage case
/*
import { Expandable } from '../../common/Expandable';
export const BraidsWelcome = () => {
  return (
    <section className='w-full' id='braids-welcome'>
      <div className='flex flex-col justify-center p-10 text-center sm:p-20'>
        <span className='mb-2 text-2xl font-semibold text-center sm:text-4xl'>
          <span className='underline-txt'>ЗАЩО</span>{' '}
          <span className='underline-txt'>ПЛИТКИ?</span>
        </span>
        <h2 className='mb-6 text-xl sm:text-2xl'>
          Удобство да се събуждаш красива.
        </h2>
        <p className='braidswelcome__paragraph line-clamp-6 sm:line-clamp-none'>
          Сплитането на косата дава възможност да разполагаш с времето си за
          всичко останало. Едновременно постигаш промяна във визията си и
          мечтаната дълга коса. Плитката не е просто практичен начин да
          премахнете косата от лицето си, докато се опитвате да свършите всички
          задачи през горещия ден. Тя също е страхотен външен вид, когато бъде
          допълнена от по-официален тоалет. Блясък в очите, цвят в косите и
          усмивката е на лице!
        </p>
      </div>
      <section className='braidshero bg-zinc-900'>
        <div className='flex gap-20 p-20'>
          <div className='braidshero__container'>
            <img
              className='braidshero__image'
              src='images/services/4.webp'
              alt='Service'
              loading='lazy'
            />
          </div>
          <div className='braidshero__container'>
            <img
              className='braidshero__image'
              src='images/services/5.webp'
              alt='Service'
              loading='lazy'
            />
          </div>
          <div className='braidshero__container'>
            <img
              className='braidshero__image'
              src='images/services/6.webp'
              alt='Service'
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <div className='braidswelcome__text'>
        <span className='braidswelcome__span'>ЗА МЕН</span>
        <h2 className='braidswelcome__label'>Първата ми среща с плитките</h2>
        <Expandable title='Section 1'>
          Моята първа среща с плитките беше като бях на 10 и плетях
          непрофесионално мои приятелки, но това беше страст и нищо повече.
          Когато станах на 16 години заминах за Слънчев бряг да работя, без да
          имам идеи и претенции с какво ще се занимавам.
        </Expandable>
        <Expandable title='Section 2'>
          Съвсем случайно попаднах на една жена, която търсеше да назначи момиче
          за плетене на плитки. За мен това беше уникална възможност, защото
          обичах да го правя. Няма да крия колко трудно ми беше отначало и колко
          пъти съм стискала зъби, но страстта ми към плетенето на плитки ме
          поддържаше и ми даваше сили да не се откажа. И така 2 лета плетях там,
          а това ми помогна да се усъвършенствам, да давам всичко от себе си и
          най-вече да продължавам да правя, това което обичам. Години по късно
          заминах за Лондон. Докато живеех там винаги съм имала постоянна
          работа, но продължих да поддържам страстта си към плетенето. За 3
          години смених няколко работни места, но плитките бяха рамо до рамо с
          мен и не спирах да плета във всеки свободен момент, който имах. Година
          и половина по-късно се зароди идеята да си имам свое собствено място,
          където да изразявам напълно себе си и да творя на воля. А главните
          “виновници” за това са моите близки и приятели и най-вече човекът до
          мен, без който нямаше да повярвам в себе си. Каня ви в моето арт
          пространство, за да усетите магията на една сбъдната мечта. Вярвам, че
          ще се чувствате уютно и ще си тръгнете с модерна визия, но най-важното
          е, че ще ви изпратя с хиляди плитки и усмивки на лице!
        </Expandable>
      </div>
    </section>
  );
};
*/
