import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Cats from "../../pages/cats/Cats";
import CatForm from "../forms/newCatForm/NewCatForm";
import CatDetails from "../../pages/catDetails/CatDetails";
import Litters from "../../pages/litters/Litters";
import NewLitterForm from "../forms/newLitterForm/NewLitterForm";
import LitterDetails from "../../pages/litterDetails/LitterDetails";

function AppRouter({ cats, litters, maleCats, femaleCats, setCats, addCat, deleteCat, addLitter, toggleMenu }) {

  const user = localStorage.getItem("user");

  return (
    <Routes>

      <Route
        path="/login"
        element={
          user ? <Navigate to="/home" /> : <Login toggleMenu={toggleMenu} />
        }
      />
      <Route
        path="/home"
        element={
          user ? <Home toggleMenu={toggleMenu} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/cats"
        element={
          user ? <Cats cats={cats} deleteCat={deleteCat} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/addCat"
        element={
          user ? <CatForm addCat={addCat} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/litters"
        element={
          user ? <Litters maleCats={maleCats} femaleCats={femaleCats} litters={litters} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/addLitter"
        element={
          user ? <NewLitterForm addLitter={addLitter} cats={cats}  /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/cat/:id"
        element={<CatDetails cats={cats} setCats={setCats} />}
      />
      <Route
        path="/litter/:id"
        element={<LitterDetails cats={cats} setCats={setCats} />}
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/home" : "/login"} />}
      />

    </Routes>
  );
}

export default AppRouter;