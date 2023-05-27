import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import './style.scss';

const navigationLinks = [
  {
    path: `${AppRoute.MAIN}`,
    name: 'MainPage',
  },
  {
    path: `${AppRoute.LOGIN}`,
    name: 'LoginPage',
  },
  {
    path: `${AppRoute.REGISTRATION}`,
    name: 'RegestrationPage',
  },
  {
    path: `${AppRoute.PROFILE}`,
    name: 'ProfilePage',
  },
  {
    path: `${AppRoute.PASSWORD}`,
    name: 'PasswordPage',
  },
  {
    path: `${AppRoute.PROFILE_SETTINGS}`,
    name: 'ProfileSettingsPage',
  },
  {
    path: `${AppRoute.GAME}`,
    name: 'GamePage',
  },
  {
    path: `${AppRoute.FORUM}`,
    name: 'ForumPage',
  },
  {
    path: `${AppRoute.FORUM}/:10`,
    name: 'ForumTopicPage',
  },
  {
    path: `${AppRoute.LEADERBOARD}`,
    name: 'LeaderboardPage',
  },
  {
    path: `/123weqd`,
    name: 'ErrorPage',
  },
];

const MainPage = () => {
  return (
    <>
      <h1>Main page</h1>
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

export default MainPage;
