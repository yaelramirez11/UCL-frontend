import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Matches from "../Matches/Matches";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
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
          <Route path="/partidos" element={<Matches />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
