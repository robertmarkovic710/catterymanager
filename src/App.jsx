import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { GrAppsRounded } from "react-icons/gr";

import SideMenu from "./components/sidemenu/SideMenu";
import AppRouter from "./components/router/AppRouter";

import "./App.css";

function App() {

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [cats, setCats] = useState(() => {

    const saved = localStorage.getItem("cats");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [litters, setLitters] = useState(() => {

    const saved = localStorage.getItem("litters");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {

    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

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

    setCats(prev => [
      ...prev,
      newCat
    ]);
  };

  const deleteCat = (id) => {
    setCats(prev =>
      prev.filter(cat => cat.id !== id)
    );

    return true;
  };

  const addLitter = (newLitter) => {

    setLitters(prev => [
      ...prev,
      newLitter
    ]);
  };

  const deleteLitter = (id) => {

    setLitters(prev =>
      prev.filter(litter => litter.id !== id)
    );

    return true;
  };

  return (

    <div>

      <SideMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      {!(
        location.pathname === "/login" ||
        location.pathname === "/addCat" ||
        location.pathname === "/addLitter" ||
        location.pathname.startsWith("/cat/") ||
        location.pathname.startsWith("/litter/")
      ) && (

          <div
            className="global-menu-icon"
            onClick={toggleMenu}
          >
            <GrAppsRounded />
          </div>
        )}

      <AppRouter
        cats={cats}
        setCats={setCats}
        litters={litters}
        setLitters={setLitters}
        addCat={addCat}
        addLitter={addLitter}
        deleteCat={deleteCat}
        deleteLitter={deleteLitter}
        toggleMenu={toggleMenu}
      />

    </div>
  );
}

export default App;