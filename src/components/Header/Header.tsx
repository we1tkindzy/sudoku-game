import NavMenu from 'components/NavMenu/NavMenu';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import './style.scss';

const Header = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          onClick={navigateToMain}
          className="header__logo"
          src="src/assets/logo.svg"
          alt="Logo"
          width={90}
          height={90}
        />

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
