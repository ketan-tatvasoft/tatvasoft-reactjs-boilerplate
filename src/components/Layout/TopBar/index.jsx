import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Constants
import { TOP_BAR_HEADING, LOGOUT, ACCESS_TOKEN } from '../../../constants/general';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '../../../constants/routes';

// CSS
import './TopBar.css';

// Images
import logo from '../../../assets/images/logo.png';

function TopBar() {
  const navigate = useNavigate();
  // EVENTS
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    return navigate(PUBLIC_ROUTES.LOGIN);
  };

  return (
    <>
      <div className="topbar-wrapper">
        {/* Left */}
        <div className="left-side">
          <div className="left-inner">
            <div className="logo">
              <Link to={PRIVATE_ROUTES.HOME}>
                <img src={logo} alt="logo_picture" />
              </Link>
            </div>
            <h3>{TOP_BAR_HEADING}</h3>
          </div>
        </div>

        {/* Right */}
        <div className="right-side">
          <button onClick={() => handleLogout()} className="btn-logout">
            {LOGOUT}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopBar;
