import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import PrivateRoutes from './components/PrivateRoute';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Constants
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './constants/routes';

// CSS
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/****** PUBLIC ROUTES ******/}
          <Route element={<Login />} path={PUBLIC_ROUTES.LOGIN} />

          {/****** PRIVATE ROUTES ******/}
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path={PRIVATE_ROUTES.DASHBOARD} />
            <Route element={<Profile />} path={PRIVATE_ROUTES.PROFILE} />

            {/* 404 - Page not found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
