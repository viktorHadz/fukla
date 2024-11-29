import { OurServices } from './home/OurServices';
import { Instagram } from './home/Instagram';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { Tails } from './home/Tail';
import { ContactUs } from './home/ContactUs';
import { ServiceSection } from './home/ServiceSection';
import { ServiceHero } from './home/ServiceHero';
export const Home = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Tails />
      <OurServices />
      <ContactUs />
      <ServiceHero />
      <ServiceSection />
      <Instagram />
    </>
  );
};
