import './style.scss';

type LeaderboardItemType = {
  name: string;
  points: number;
  time: string;
  difficulty: string;
};

const LeaderboardItem = ({
  name,
  points,
  time,
  difficulty,
}: LeaderboardItemType) => {
  return (
    <div className="leaderboard__item">
      <p>{name}</p>
      <p>{points}</p>
      <p>{time}</p>
      <p>{difficulty}</p>
    </div>
  );
};

export default LeaderboardItem;
