import './style.scss';
import Layout from 'components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

const MainPage = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <Layout>
      <div className="main-page wrapper">
        <h1 className="main-page__title">Sudoku Game</h1>
        <button onClick={navigateToGame} className="button button--light">
          Play
        </button>
      </div>
    </Layout>
  );
};

export default MainPage;
