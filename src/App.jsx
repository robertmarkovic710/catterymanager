import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import AppRouter from "./components/router/AppRouter";

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

      <AppRouter
        cats={cats}
        addCat={addCat}
        deleteCat={deleteCat}
        toggleMenu={toggleMenu}
      />

    </div>
  );
}

export default App;