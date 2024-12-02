import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { TattooBanner } from './tattoo/TattooBanner';
import { TattooHero1 } from './tattoo/TattooHero1';
import { TattooStyles } from './tattoo/TattooStyles';
import { TattooFAQ } from './tattoo/TattooFAQ';

export const Tattoo = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <TattooBanner />
      <TattooHero1 />
      <TattooStyles />
      <TattooFAQ />
    </>
  );
};
