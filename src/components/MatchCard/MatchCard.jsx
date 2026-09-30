import "./MatchCard.css";

function MatchCard({ match }) {
  return (
    <article className="match-card">
      <p className="match-card__stage">{match.stage}</p>
      <div className="match-card__teams">
        <div className="match-card__side">
          {match.homeCrest && (
            <img
              className="match-card__crest"
              src={match.homeCrest}
              alt={match.homeTeam}
            />
          )}
          <h3 className="match-card__team">{match.homeTeam}</h3>
        </div>
        <p className="match-card__score">{match.score}</p>
        <div className="match-card__side match-card__side_away">
          {match.awayCrest && (
            <img
              className="match-card__crest"
              src={match.awayCrest}
              alt={match.awayTeam}
            />
          )}
          <h3 className="match-card__team">{match.awayTeam}</h3>
        </div>
      </div>
      <p className="match-card__meta">
        {match.date} · {match.status}
      </p>
    </article>
  );
}

export default MatchCard;
