import NavMenu from 'components/NavMenu/NavMenu';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src="src/assets/logo.svg" alt="Logo" width={90} height={90} />

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
