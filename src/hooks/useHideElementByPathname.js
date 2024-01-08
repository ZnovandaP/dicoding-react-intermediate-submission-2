import { useLocation } from 'react-router-dom';

const useHideElementByPathname = (pathnameListHideElement = ['/login', '/register']) => {
  const { pathname } = useLocation();

  return pathnameListHideElement.includes(pathname);
};

export default useHideElementByPathname;
