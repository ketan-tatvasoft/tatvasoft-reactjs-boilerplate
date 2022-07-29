import { Navigate, useNavigate } from 'react-router-dom';

// Constants
import { PRIVATE_ROUTES } from '../../constants/routes';
import { LOGIN, SUBMIT, ACCESS_TOKEN } from '../../constants/general';

// CSS
import './Login.css';

function Login() {
  /****** STATES ******/
  const navigate = useNavigate();
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  /****** FIRST TIME RENDERING VALIDATION ******/
  if (accessToken) {
    return <Navigate to={PRIVATE_ROUTES.HOME} />;
  }

  /****** EVENT HANDLING ******/
  const handleLogin = () => {
    localStorage.setItem(ACCESS_TOKEN, 'access_token_given_by_the_successfull_login_api_call');
    return navigate(PRIVATE_ROUTES.HOME);
  };

  return (
    <>
      <section className="login">
        <h2>{LOGIN}</h2>
        <input placeholder="Username" type="text" id="username"></input>
        <input placeholder="Password" type="password" id="password"></input>
        <button onClick={() => handleLogin()}>{SUBMIT}</button>
      </section>
    </>
  );
}

export default Login;
