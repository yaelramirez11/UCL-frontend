import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MatchCard from "../MatchCard/MatchCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./Matches.css";

function Matches({
  matches,
  isLoading,
  error,
  hasRequested,
  onRequestMatches,
}) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    onRequestMatches();
  }, [onRequestMatches]);

  useEffect(() => {
    setVisibleCount(3);
  }, [submittedQuery]);

  const filteredMatches = matches.filter((match) => {
    const text = `${match.homeTeam} ${match.awayTeam}`.toLowerCase();
    return text.includes(submittedQuery.toLowerCase());
  });

  const visibleMatches = filteredMatches.slice(0, visibleCount);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  }

  return (
    <main className="matches">
      <h1 className="matches__title">Partidos</h1>
      <SearchForm
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={handleSubmit}
      />
      {isLoading && <Preloader />}
      {!isLoading && error && <p className="matches__error">{error}</p>}
      {!isLoading && !error && hasRequested && filteredMatches.length === 0 && (
        <NotFound />
      )}
      {!isLoading && !error && visibleMatches.length > 0 && (
        <>
          <ul className="matches__list">
            {visibleMatches.map((match) => (
              <li key={match.id} className="matches__item">
                <MatchCard match={match} />
              </li>
            ))}
          </ul>
          {visibleCount < filteredMatches.length && (
            <button
              className="matches__more"
              type="button"
              onClick={() => setVisibleCount((count) => count + 3)}
            >
              Mostrar más
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default Matches;
