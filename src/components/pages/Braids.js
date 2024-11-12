import { BraidsHero } from "./braids/BraidsHero";
import { BraidsWelcome } from "./braids/BraidsWelcome";
import { BraidsExtensions } from "./braids/BraidsExtensions";
import { BraidsDivider } from "./braids/BraidsDivider";
import { BraidsPortfolio } from "./braids/BraidsPortfolio";
import ScrollToTopOnMount from '../ScrollToTopOnMount';
export const Braids = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <BraidsHero />
            <BraidsWelcome />
            <BraidsDivider />
            <BraidsPortfolio />
            <BraidsExtensions />
        </>
    );
};