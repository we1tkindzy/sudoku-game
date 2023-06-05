import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import './style.scss';

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <div className="error-page">
      <h1 className="error-page__title">Error 404</h1>
      <p className="error-page__text">Not Found Page</p>
      <button
        onClick={navigateToMain}
        className="button button--light error-page__button">
        Go to Main
      </button>
    </div>
  );
};

export default ErrorPage;
