import { useNavigate } from 'react-router-dom';

// CSS
import './NotFound.css';

function NotFound() {
  /****** STATES ******/
  const navigate = useNavigate();

  /****** EVENT HANDLING ******/
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="page-not-found">
      <h2>404</h2>
      <h2>Not found!</h2>
      <button onClick={() => handleGoBack()}>Go back</button>
    </section>
  );
}

export default NotFound;
