import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import PrivateRoutes from './components/PrivateRoute';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CRUD from './pages/CRUD';
import List from './pages/CRUD/List';
import Create from './pages/CRUD/Create';
import Edit from './pages/CRUD/Edit';
import CRUD_WITH_REDUX from './pages/CRUD_WITH_REDUX';
import List_CRUD_WITH_REDUX from './pages/CRUD_WITH_REDUX/List';
import Create_CRUD_WITH_REDUX from './pages/CRUD_WITH_REDUX/Create';
import Edit_CRUD_WITH_REDUX from './pages/CRUD_WITH_REDUX/Edit';
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
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

          {/****** PRIVATE ROUTES ******/}
          <Route element={<PrivateRoutes />}>
            <Route path={PRIVATE_ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={PRIVATE_ROUTES.CRUD.INDEX} element={<CRUD />}>
              <Route index element={<List />} />
              <Route path={PRIVATE_ROUTES.CRUD.CREATE} element={<Create />} />
              <Route path={PRIVATE_ROUTES.CRUD.EDIT} element={<Edit />} />
            </Route>
            <Route path={PRIVATE_ROUTES.PROFILE} element={<Profile />} />
            {/* Example : CRUD with Redux  */}
            <Route path={PRIVATE_ROUTES.CRUD_WITH_REDUX.INDEX} element={<CRUD_WITH_REDUX />}>
              <Route index element={<List_CRUD_WITH_REDUX />} />
              <Route
                path={PRIVATE_ROUTES.CRUD_WITH_REDUX.CREATE}
                element={<Create_CRUD_WITH_REDUX />}
              />
              <Route
                path={PRIVATE_ROUTES.CRUD_WITH_REDUX.EDIT}
                element={<Edit_CRUD_WITH_REDUX />}
              />
            </Route>

            {/* 404 - Page not found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
