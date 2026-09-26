import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Matches from "../Matches/Matches";
import Footer from "../Footer/Footer";
import {
  getChampionsLeagueMatches,
  normalizeMatch,
} from "../../utils/footballDataApi";
import "./App.css";

const STORAGE_KEY = "ucl-pulse-matches";
const ERROR_MESSAGE =
  "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.";

function readStoredMatches() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function App() {
  const [matches, setMatches] = useState(readStoredMatches);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasRequested, setHasRequested] = useState(false);

  const handleRequestMatches = useCallback(() => {
    setIsLoading(true);
    setError("");

    getChampionsLeagueMatches()
      .then((data) => {
        const normalized = (data.matches || []).map(normalizeMatch);
        setMatches(normalized);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        setHasRequested(true);
      })
      .catch(() => {
        const stored = readStoredMatches();
        if (stored.length > 0) {
          setMatches(stored);
        } else {
          setError(ERROR_MESSAGE);
        }
        setHasRequested(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
              </>
            }
          />
          <Route
            path="/partidos"
            element={
              <Matches
                matches={matches}
                isLoading={isLoading}
                error={error}
                hasRequested={hasRequested}
                onRequestMatches={handleRequestMatches}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
