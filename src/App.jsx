import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";

import SideMenu from "./components/sidemenu/SideMenu";
import AppRouter from "./components/router/AppRouter";

import "./App.css";

function App() {
  
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [cats, setCats] = useState(() => {
    const saved = localStorage.getItem("cats");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  const deleteCat = (id) => {
    setCats(cats.filter(cat => cat.id !== id));
  };

  const addLitter = (newLitter) => {
    setCats(prev =>
      prev.map((cat, index) => {
        if (index === 0) {
          return {
            ...cat,
            litters: [...(cat.litters || []), newLitter]
          };
        }
        return cat;
      })
    );
  };

  return (

    <div>
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {location.pathname !== "/login" && (
      <div className="global-menu-icon" onClick={toggleMenu}>
        <GrAppsRounded />
      </div>
    )}
      
      <AppRouter cats={cats} setCats={setCats} addCat={addCat} deleteCat={deleteCat} addLitter={addLitter} toggleMenu={toggleMenu} />

    </div>
  );
}

export default App;