import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MatchCard from "../MatchCard/MatchCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import mockMatches from "../../utils/mockMatches";
import "./Matches.css";

function Matches() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredMatches = mockMatches.filter((match) => {
    const text = `${match.homeTeam} ${match.awayTeam}`.toLowerCase();
    return text.includes(submittedQuery.toLowerCase());
  });

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setSubmittedQuery(query.trim());
      setIsLoading(false);
    }, 800);
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
      {!isLoading && filteredMatches.length === 0 && <NotFound />}
      {!isLoading && filteredMatches.length > 0 && (
        <ul className="matches__list">
          {filteredMatches.map((match) => (
            <li key={match.id} className="matches__item">
              <MatchCard match={match} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Matches;
