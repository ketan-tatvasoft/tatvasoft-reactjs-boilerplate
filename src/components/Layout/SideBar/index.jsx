import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Constants
import { SIDEBAR_MENUS } from '../../../constants/menus';

// CSS
import './SideBar.css';

function SideBar() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const getCurrentRoute = location?.pathname;
    if (getCurrentRoute === '/') {
      setCurrentRoute(getCurrentRoute);
    } else if (getCurrentRoute) {
      const indexForRemoveChildrenRoutes = getCurrentRoute.slice(1).indexOf('/') + 1;
      if (indexForRemoveChildrenRoutes) {
        const parentRoute = getCurrentRoute.slice(0, indexForRemoveChildrenRoutes);
        setCurrentRoute(parentRoute);
      } else {
        setCurrentRoute(getCurrentRoute);
      }
    }
  }, [location]);

  return (
    <div className="sideBar-wrapper">
      <div className="menus">
        <ul>
          {SIDEBAR_MENUS.map((menu, index) => {
            return (
              <li key={index}>
                <Link to={menu.ROUTE} className={menu.ROUTE == currentRoute ? 'active' : null}>
                  {menu.LABEL}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
