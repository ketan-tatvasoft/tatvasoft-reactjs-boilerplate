import PropTypes from 'prop-types';

// Components
import TopBar from './TopBar';
import SideBar from './SideBar';

// CSS
import './Layout.css';

function Layout({ content }) {
  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Side Bar */}
      <SideBar />

      {/* Content Area */}
      <div className="main-content-area">{content}</div>
    </>
  );
}

// ***** PROPS TYPES *****
Layout.propTypes = {
  content: PropTypes.any
};

export default Layout;
