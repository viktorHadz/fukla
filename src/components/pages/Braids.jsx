import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsHero1 } from './braids/BraidsHero1.jsx';
import { BraidsHero2 } from './braids/BraidsHero2.jsx';
import { BraidStyles } from './braids/BraidsStyles.jsx';
import { PricingAndGallery } from './braids/PricingAndGallery.jsx';
import { AboutBoryana } from './braids/aboutBoryana.jsx';
import { AboutSlavina } from './braids/aboutSlavina.jsx';
import { FAQ } from './braids/FAQ.jsx';
export const Braids = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <BraidsHero1 />
      <BraidsHero2 />
      <BraidStyles />
      <PricingAndGallery />
      <AboutBoryana />
      <AboutSlavina />
    </>
  );
};
