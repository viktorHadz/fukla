import { ExtensionsBanner } from './extensions/ExtensionsBanner';
import { ExtensionsHero1 } from './extensions/ExtensionsHero1';
import { ExtensionsStyles } from './extensions/ExtensionsStyles';
import { ExtensionsHero2 } from './extensions/ExtensionsHero2';
import { ExtensionsFAQ } from './extensions/ExtensionsFAQ';
export const Extensions = () => {
  return (
    <>
      <ExtensionsBanner />
      <ExtensionsHero1 />
      <ExtensionsStyles />
      <ExtensionsHero2 />
      <ExtensionsFAQ />
    </>
  );
};
