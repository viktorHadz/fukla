import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsWelcome } from './braids/BraidsWelcome';
import { BraidsHero } from './braids/BraidsHero';
import { BraidsCards } from './braids/BraidsCards';
import Newone from './braids/braidsWithBanImage';
import Test from './braids/Test';
import { BraidsTypes } from './braids/BraidsTypes';
export const Braids = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <BraidsTypes />
      <BraidsCards />
      <Newone />
      <BraidsWelcome />
      <Test />
      <BraidsHero />
    </>
  );
};
