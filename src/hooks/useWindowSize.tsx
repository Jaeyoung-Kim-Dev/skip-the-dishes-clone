import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const checkScreenSize = () =>
    window.innerWidth > 960 ? setIsMobile(false) : setIsMobile(true);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};
