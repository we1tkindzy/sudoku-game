import Layout from 'components/Layout/Layout';
import LeaderboardItem from './LeaderboardItem';
import './style.scss';

const users = [
  {
    id: 1,
    name: 'vasya',
    points: 123,
    time: '04:12',
    difficulty: 'easy',
  },
  {
    id: 2,
    name: 'ger',
    points: 434,
    time: '12:33',
    difficulty: 'hard',
  },
  {
    id: 3,
    name: 'zack',
    points: 523,
    time: '10:23',
    difficulty: 'medium',
  },
];

const LeaderboardPage = () => {
  return (
    <Layout>
      <div className="wrapper wrapper--bg leaderboard">
        <h1 className="leaderboard__title">Leaderboard</h1>
        <div className="leaderboard__wrapper">
          <div className="leaderboard__head">
            <p>name</p>
            <p>points</p>
            <p>time</p>
            <p>difficulty</p>
          </div>

          {users.map(({ id, ...rest }) => (
            <LeaderboardItem key={id} {...rest} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LeaderboardPage;
