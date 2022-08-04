import { PRIVATE_ROUTES } from './routes';

export const SIDEBAR_MENUS = [
  {
    LABEL: 'Dashboard',
    ROUTE: PRIVATE_ROUTES.DASHBOARD
  },
  {
    LABEL: 'CRUD',
    ROUTE: PRIVATE_ROUTES.CRUD.INDEX
  },
  {
    LABEL: 'Profile',
    ROUTE: PRIVATE_ROUTES.PROFILE
  }
];
