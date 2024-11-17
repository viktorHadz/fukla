import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsWelcome } from './braids/BraidsWelcome';
import { BraidsHero } from './braids/BraidsHero';
import { BraidsDivider } from './braids/BraidsDivider';
import { BraidsPortfolio } from './braids/BraidsPortfolio';
import { BraidsExtensions } from './braids/BraidsExtensions';
import BraidsGallery from './braids/BraidsGallery';

export const Braids = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <BraidsWelcome />
      <BraidsHero />
      <BraidsDivider />
      <BraidsGallery />
      <BraidsPortfolio />
      <BraidsExtensions />
    </>
  );
};
