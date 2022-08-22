export const PUBLIC_ROUTES = {
  LOGIN: '/login'
};

export const PRIVATE_ROUTES = {
  HOME: '/',
  DASHBOARD: '/',
  CRUD: {
    INDEX: '/crud',
    CREATE: 'create',
    EDIT: 'edit/:id'
  },
  PROFILE: '/profile',
  CRUD_WITH_REDUX: {
    INDEX: '/crud-with-redux',
    CREATE: 'create',
    EDIT: 'edit/:id'
  }
};
