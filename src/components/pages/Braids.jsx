import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsWelcome } from './braids/BraidsWelcome';
import { BraidsHero } from './braids/BraidsHero';
import { BraidsCards } from './braids/BraidsCards';

export const Braids = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <BraidsCards />
      <BraidsWelcome />
      <BraidsHero />
    </>
  );
};
