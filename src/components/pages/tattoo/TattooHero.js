export const TattooHero = () => {
  return (
    <div className='hero'>
      <video src='./images/videos/makeupvideo.mp4' autoPlay loop muted />
      <div className='braidshero__book'>
        <p className='braidshero__book__text'>
          Запишете си час:{' '}
          <a className='braidshero__phone' href='tel:0887079291'>
            088 707 9291
          </a>
        </p>
      </div>
    </div>
  );
};
