import { Link } from 'react-router-dom';

// Constants
import { SIDEBAR_MENUS } from '../../../constants/menus';

// CSS
import './SideBar.css';

function SideBar() {
  return (
    <div className="sideBar-wrapper">
      <div className="menus">
        <ul>
          {SIDEBAR_MENUS.map((menu, index) => {
            return (
              <li key={index}>
                <Link to={menu.ROUTE}>{menu.LABEL}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
