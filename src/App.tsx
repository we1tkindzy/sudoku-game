import 'styles/style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import MainPage from 'pages/Main/Main';
import ErrorPage from 'pages/Error/Error';
import LoginPage from 'pages/Login/Login';
import RegestrationPage from 'pages/Login/Registration';
import ProfilePage from 'pages/Profile/Profile';
import PasswordPage from 'pages/Profile/Password';
import ProfileSettingsPage from 'pages/Profile/ProfileSettings';
import GamePage from 'pages/Game/Game';
import ForumPage from 'pages/Forum/Forum';
import ForumTopicPage from 'pages/Forum/Topic';
import LeaderboardPage from 'pages/Leaderboard/Leaderboard';

export const routs = [
  {
    path: `${AppRoute.MAIN}`,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${AppRoute.LOGIN}`,
    element: <LoginPage />,
  },
  {
    path: `${AppRoute.REGISTRATION}`,
    element: <RegestrationPage />,
  },
  {
    path: `${AppRoute.PROFILE}`,
    element: <ProfilePage />,
  },
  {
    path: `${AppRoute.PASSWORD}`,
    element: <PasswordPage />,
  },
  {
    path: `${AppRoute.PROFILE_SETTINGS}`,
    element: <ProfileSettingsPage />,
  },
  {
    path: `${AppRoute.GAME}`,
    element: <GamePage />,
  },
  {
    path: `${AppRoute.FORUM}`,
    element: <ForumPage />,
  },
  {
    path: `${AppRoute.FORUM_TOPIC}`,
    element: <ForumTopicPage />,
  },
  {
    path: `${AppRoute.LEADERBOARD}`,
    element: <LeaderboardPage />,
  },
];

const router = createBrowserRouter(routs);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
