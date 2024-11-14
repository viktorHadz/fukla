import './normalize.css';
import './style.css';

import { Header } from './components/common/Header';
import { ScrollTopButton } from './components/common/ScrollTopButton';
import { Footer } from './components/common/Footer';
import { AllRoutes } from './components/routes/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='content'>
          <AllRoutes />
        </div>
        <Footer />
        <ScrollTopButton />
      </Router>
    </div>
  );
}

export default App;
