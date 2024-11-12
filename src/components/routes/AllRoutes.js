import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Braids } from "../pages/Braids";
// import { Makeup } from "../pages/Makeup";
import { Nails } from "../pages/Nails";
import { Gallery } from "../pages/Gallery";

export const AllRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/braids" element={<Braids />}></Route>
            {/* <Route path="/makeup" element={<Makeup />}></Route> */}
            <Route path="/nails" element={<Nails />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
    );
};