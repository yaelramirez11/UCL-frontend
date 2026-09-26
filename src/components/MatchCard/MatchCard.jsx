import "./MatchCard.css";

function MatchCard({ match }) {
  return (
    <article className="match-card">
      <p className="match-card__stage">{match.stage}</p>
      <div className="match-card__teams">
        <h3 className="match-card__team">{match.homeTeam}</h3>
        <p className="match-card__score">{match.score}</p>
        <h3 className="match-card__team">{match.awayTeam}</h3>
      </div>
      <p className="match-card__meta">
        {match.date} · {match.status}
      </p>
    </article>
  );
}

export default MatchCard;
