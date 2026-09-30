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

const ERROR_MESSAGE =
  "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.";
const OFFLINE_MESSAGE =
  "No tienes conexión a internet. Revisa tu conexión e inténtalo de nuevo.";

function App() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasRequested, setHasRequested] = useState(false);

  const handleRequestMatches = useCallback(() => {
    setIsLoading(true);
    setError("");
    setMatches([]);

    if (!navigator.onLine) {
      setError(OFFLINE_MESSAGE);
      setHasRequested(true);
      setIsLoading(false);
      return;
    }

    getChampionsLeagueMatches()
      .then((data) => {
        const normalized = (data.matches || []).map(normalizeMatch);
        setMatches(normalized);
        setHasRequested(true);
      })
      .catch(() => {
        setMatches([]);
        setError(navigator.onLine ? ERROR_MESSAGE : OFFLINE_MESSAGE);
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
