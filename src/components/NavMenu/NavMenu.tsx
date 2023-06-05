import { AppRoute } from 'utils/constants';
import { NavLink } from 'react-router-dom';
import './style.scss';

const navigationLinks = [
  {
    path: `${AppRoute.MAIN}`,
    name: 'Main',
  },
  {
    path: `${AppRoute.LOGIN}`,
    name: 'Login',
  },
  {
    path: `${AppRoute.REGISTRATION}`,
    name: 'Signin',
  },
  {
    path: `${AppRoute.PROFILE}`,
    name: 'Profile',
  },
  {
    path: `${AppRoute.GAME}`,
    name: 'Game',
  },
  {
    path: `${AppRoute.SUPPORT}`,
    name: 'Support',
  },
  {
    path: `${AppRoute.LEADERBOARD}`,
    name: 'Leaderboard',
  },
];

const NavMenu = () => {
  return (
    <>
      <nav className="navigation">
        {navigationLinks.map((el, id) => (
          <NavLink key={id + 1} to={el.path}>
            {el.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
