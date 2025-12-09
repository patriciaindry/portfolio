// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait a tiny bit to ensure content is loaded
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10); // 10ms delay, adjust if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

