import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CatForm from "./components/forms/NewCatForm";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

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

  const editCat = (cat) => {
    alert("Edit: " + cat.name);
  };

  return (
    <div>

      <Header title="Cattery Manager" />

      <Routes>
        <Route path="/" element={
          <div className="container">

            <button className="add-btn" onClick={() => navigate("/add")}>
              + Dodaj mačku
            </button>

            {cats.length === 0 ? (
              <p className="empty-message">
                Klikna da gumb iznad i dodaj svoju prvu mačku! <br />
              </p>
            ) : (
              <div className="cat-grid">
                {cats.map((cat) => (
                  <div key={cat.id} className="cat-card">
                    <div className="card-actions">
                      <button onClick={() => editCat(cat)} className="icon-btn">
                        ✏️
                      </button>
                      <button onClick={() => deleteCat(cat.id)} className="icon-btn delete">
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