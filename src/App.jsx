import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import CatForm from "./components/forms/NewCatForm";
import Home from "./pages/Home";

import "./App.css";

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [cats, setCats] = useState(() => {
    const saved = localStorage.getItem("cats");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const addCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  const deleteCat = (id) => {
    setCats(cats.filter(cat => cat.id !== id));
  };

  return (
    <div>

      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {location.pathname !== "/" && (
        <Header toggleMenu={toggleMenu} />
      )}

      <Routes>

        <Route path="/" element={
          <Home toggleMenu={toggleMenu} />
        } />

        <Route path="/cats" element={
          <div className="container">

            <button className="add-btn" onClick={() => navigate("/add")}>
              + Dodaj mačku
            </button>

            {cats.length === 0 ? (
              <p className="empty-message">
                Nemaš još unesenih mačaka.
              </p>
            ) : (
              <div className="cat-grid">
                {cats.map((cat) => (
                  <div key={cat.id} className="cat-card">

                    <div className="card-actions">
                      <button className="icon-btn">✏️</button>
                      <button 
                        className="icon-btn delete"
                        onClick={() => deleteCat(cat.id)}
                      >
                        🗑
                      </button>
                    </div>

                    <h3>{cat.name}</h3>
                    <p><span>Pasmina:</span> {cat.breed}</p>
                    <p><span>Godine:</span> {cat.age}</p>
                    <p><span>Spol:</span> {cat.gender}</p>

                  </div>
                ))}
              </div>
            )}

          </div>
        } />

        <Route path="/add" element={
          <CatForm addCat={addCat} />
        } />

      </Routes>

    </div>
  );
}

export default App;