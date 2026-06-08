import "./App.css"; 

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";

import SideMenu from "./components/sidemenu/SideMenu.jsx";
import AppRouter from "./router/AppRouter";


function App() {
  const location = useLocation();

  const [cats, setCats] = useState(() => {
    const saved = localStorage.getItem("cats");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const [litters, setLitters] = useState(() => {
    const saved = localStorage.getItem("litters");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("litters", JSON.stringify(litters));
  }, [litters]);

  const [exhibitions, setExhibitions] = useState(() => {
    const saved = localStorage.getItem("exhibitions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("exhibitions", JSON.stringify(exhibitions));
  }, [exhibitions]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addCat = (newCat) => {
    setCats(prev => [...prev, newCat]);
  };

  const deleteCat = (id) => {
    setCats(prev => prev.filter(cat => cat.id !== id));
    return true;
  };

  const addLitter = (newLitter) => {
    setLitters(prev => [...prev, newLitter]);
  };

  const deleteLitter = (id) => {
    setLitters(prev => prev.filter(litter => litter.id !== id));
    return true;
  };

  const addExhibition = (newExhibition) => {
    setExhibitions(prev => [...prev, newExhibition]);
  };

  const deleteExhibition = (id) => {
    setExhibitions(prev => prev.filter(exhibition => exhibition.id !== id));
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
        location.pathname === "/register" ||
        location.pathname === "/addCat" ||
        location.pathname === "/addLitter" ||
        location.pathname.startsWith("/cat/") ||
        location.pathname.startsWith("/editCat/") ||
        location.pathname.startsWith("/litter/") ||
        location.pathname.startsWith("/editLitter/") ||
        location.pathname === "/addExhibition" ||
        location.pathname.startsWith("/exhibition/") ||
        location.pathname.startsWith("/editExhibition/")
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
        exhibitions={exhibitions}
        setExhibitions={setExhibitions}
        addCat={addCat}
        addLitter={addLitter}
        addExhibition={addExhibition}
        deleteCat={deleteCat}
        deleteLitter={deleteLitter}
        deleteExhibition={deleteExhibition}
        toggleMenu={toggleMenu}
      />

    </div>
  );
}

export default App;