import { NailsBanner } from './nails/NailsBanner';
import { NailsHero1 } from './nails/NailsHero1';
import { NailsStyles } from './nails/NailsStyles';
import { NailsAboutMe } from './nails/NailsAboutMe';
import { FAQ } from './nails/NailsFAQ';

import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Nails = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <NailsBanner />
      <NailsHero1 />
      <NailsStyles />
      <NailsAboutMe />
      <FAQ />
    </>
  );
};
