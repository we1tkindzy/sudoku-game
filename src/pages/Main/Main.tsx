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
      <div className="main-page">
        <div className="main-page__wrapper">
          <h1>Sudoku Game</h1>
          <button onClick={navigateToGame} className="button">
            Play
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
