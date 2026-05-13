import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";

import SideMenu from "./components/sidemenu/SideMenu";
import AppRouter from "./components/router/AppRouter";

import "./App.css";

function App() {

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [litters, setLitters] = useState(() => {
    const saved = localStorage.getItem("litters");

    return saved ? JSON.parse(saved) : [];
  });

  const [maleCats, setMaleCats] = useState(() => {
    const saved = localStorage.getItem("maleCats");
    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [femaleCats, setFemaleCats] = useState(() => {
    const saved = localStorage.getItem("femaleCats");
    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "maleCats",
      JSON.stringify(maleCats)
    );

  }, [maleCats]);

  useEffect(() => {
    localStorage.setItem(
      "femaleCats",
      JSON.stringify(femaleCats)
    );

  }, [femaleCats]);

  useEffect(() => {

    localStorage.setItem(
      "litters",
      JSON.stringify(litters)
    );

  }, [litters]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addCat = (newCat) => {
    if (newCat.gender === "Mužjak") {
      setMaleCats(prev => [
        ...prev,
        newCat
      ]);

    } else {
      setFemaleCats(prev => [
        ...prev,
        newCat
      ]);

    }
  };

  const deleteCat = (id) => {
    setMaleCats(prev =>
      prev.filter(cat => cat.id !== id)
    );
    setFemaleCats(prev =>
      prev.filter(cat => cat.id !== id)
    );
  };

  const addLitter = (newLitter) => {
    setLitters(prev => [...prev, newLitter]);
  };

  return (

    <div>
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {!(
        location.pathname === "/login" ||
        location.pathname === "/addCat" ||
        location.pathname === "/addLitter" ||
        location.pathname.startsWith("/cat/") ||
        location.pathname.startsWith("/litter/")
      ) && (
        <div className="global-menu-icon" onClick={toggleMenu}>
          <GrAppsRounded />
        </div>
      )}

      <AppRouter maleCats={maleCats} femaleCats={femaleCats} litters={litters} addLitter={addLitter} setLitters={setLitters} addCat={addCat} deleteCat={deleteCat} toggleMenu={toggleMenu} />

    </div>
  );
}

export default App;