import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsWelcome } from './braids/BraidsWelcome';
import { BraidsHero } from './braids/BraidsHero';
import { BraidsCards } from './braids/BraidsCards';
import Example from './braids/braidsBanNoImage';
import Newone from './braids/braidsWithBanImage';
import Test from './braids/Test';
export const Braids = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <Example />
      <BraidsCards />
      <Newone />
      <BraidsWelcome />
      <Test />
      <BraidsHero />
    </>
  );
};
