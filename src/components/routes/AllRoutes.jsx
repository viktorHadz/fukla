import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Braids } from '../pages/Braids';
import { Tattoo } from '../pages/Tattoo';
import { Extensions } from '../pages/Extensions';
import { Nails } from '../pages/Nails';

export const AllRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/braids' element={<Braids />}></Route>
      <Route path='/tattoo' element={<Tattoo />}></Route>
      <Route path='/extensions' element={<Extensions />}></Route>
      <Route path='/nails' element={<Nails />}></Route>
    </Routes>
  );
};
