import { MakeupHero } from "./makeup/MakeupHero";
import { MakeupWelcome } from "./makeup/MakeupWelcome";
import { BraidsDivider } from "./braids/BraidsDivider";
import { MakeupPortfolio } from "./makeup/MakeupPortfolio";
import { MakeupPricing } from "./makeup/MakeupPricing";
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Makeup = () => {
    return (
    <>
        <ScrollToTopOnMount />
        <MakeupHero />
        <MakeupWelcome />
        <BraidsDivider />
        <MakeupPortfolio />
        <MakeupPricing />
    </>
    );
};