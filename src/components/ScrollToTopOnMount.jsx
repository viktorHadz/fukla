import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return null;
}

export default ScrollToTopOnMount;
