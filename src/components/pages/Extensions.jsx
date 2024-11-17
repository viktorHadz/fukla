import { ExtensionsBanner } from './extensions/ExtensionsBanner';
import { ExtensionsHero } from './extensions/ExtensionsHero';
import { ExtensionsWelcome } from './extensions/ExtensionsWelcome';
import { ExtensionsPortfolio } from './extensions/ExtensionsPortfolio';
import { ExtensionsPricing } from './extensions/ExtensionsPricing';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Extensions = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <ExtensionsBanner />
      <ExtensionsHero />
      <ExtensionsWelcome />
      <ExtensionsPortfolio />
      <ExtensionsPricing />
    </>
  );
};
