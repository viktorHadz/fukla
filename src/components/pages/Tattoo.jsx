import { TattooBanner } from './tattoo/TattooBanner';
import { TattooHero } from './tattoo/TattooHero';
import { TattooWelcome } from './tattoo/TattooWelcome';
import { TattooPortfolio } from './tattoo/TattooPortfolio';
import { TattooPricing } from './tattoo/TattooPricing';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Tattoo = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <TattooBanner />
      <TattooHero />
      <TattooWelcome />
      <TattooPortfolio />
      <TattooPricing />
    </>
  );
};
