import { Hero } from './home/Hero';
import { OurServices } from './home/OurServices';
import { Services } from './home/Services';
import { Instagram } from './home/Instagram';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { Tails } from './home/Tail';

export const Home = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Tails />
      <OurServices />
      <Hero />
      <Services />
      <Instagram />
    </>
  );
};
