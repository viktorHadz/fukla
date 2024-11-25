import './normalize.css';
import './style.css';

import { Header } from './components/common/Header';
import { ScrollTopButton } from './components/common/ScrollTopButton';
import { Footer } from './components/common/Footer';
import { AllRoutes } from './components/routes/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
// Analytics
import { analytics, logEvent } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  // Controls header visibility - exposed globally bellow
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    // SEO Instructions: Example analytics events for all pages
    logEvent(analytics, 'Home page accessed: ', { page: 'home' });
    logEvent(analytics, 'Braids page accessed: ', { page: 'braids' });
    logEvent(analytics, 'Nails page accessed: ', { page: 'nails' });
    logEvent(analytics, 'Tattoo page accessed: ', { page: 'tattoo' });
    logEvent(analytics, 'Extensions page accessed: ', { page: 'extensions' });

    window.hideHeader = () => setIsHeaderVisible(false);
    window.showHeader = () => setIsHeaderVisible(true);
  }, []);
  return (
    <div className='App'>
      <Router>
        {isHeaderVisible && <Header />}
        <div className='content'>
          <AllRoutes />
        </div>
        <ScrollTopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
