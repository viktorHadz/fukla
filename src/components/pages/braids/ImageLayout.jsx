const images = [
  {
    src: '/images/braids/braids3Girls.webp',
    alt: 'Horizontal Image',
    span: 'col-span-6 row-span-3', // Horizontal image spans all columns
  },
  {
    src: '/images/braids/girlPinkBraid.webp',
    alt: 'Vertical Image 1',
    span: 'col-span-3 row-span-3', // First vertical image
  },
  {
    src: '/images/braids/girlBlackTop.webp',
    alt: 'Vertical Image 2',
    span: 'col-span-3 row-span-3', // Second vertical image
  },
];

export const ImageLayout = () => {
  return (
    <div className='grid h-[60vh] grid-cols-6 gap-6'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden ${image.span}`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  );
};
