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

  const [maleCats, setMaleCats] = useState([]);
  const [femaleCats, setFemaleCats] = useState([]);
  const [litters, setLitters] = useState([]);

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
    setLitters(prev => [...prev, newLitter]);
  };

  return (

    <div>
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {!["/login", "/addCat", "/addLitter"].includes(location.pathname) && (
        <div className="global-menu-icon" onClick={toggleMenu}>
          <GrAppsRounded />
        </div>
      )}

      <AppRouter cats={cats} litters={litters} maleCats={maleCats} femaleCats={femaleCats} setCats={setCats} addCat={addCat} deleteCat={deleteCat} addLitter={addLitter} toggleMenu={toggleMenu} />

    </div>
  );
}

export default App;