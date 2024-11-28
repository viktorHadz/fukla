import { NailsBanner } from './nails/NailsBanner';
import { NailsHero } from './nails/NailsHero';
import { NailsWelcome } from './nails/NailsWelcome';
import { NailsPortfolio } from './nails/NailsPortfolio';
import { NailsPricing } from './nails/NailsPricing';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Nails = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <NailsBanner />
      <NailsHero />
      <NailsWelcome />
      <NailsPortfolio />
      <NailsPricing />
    </>
  );
};
