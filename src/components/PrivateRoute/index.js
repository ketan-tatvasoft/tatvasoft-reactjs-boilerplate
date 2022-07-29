import { Outlet, Navigate } from 'react-router-dom';

// Components
import Layout from '../Layout';

// Constants
import { PUBLIC_ROUTES } from '../../constants/routes';
import { ACCESS_TOKEN } from '../../constants/general';

const PrivateRoutes = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  return accessToken ? <Layout content={<Outlet />} /> : <Navigate to={PUBLIC_ROUTES.LOGIN} />;
};

export default PrivateRoutes;
