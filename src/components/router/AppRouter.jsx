import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Cats from "../../pages/cats/Cats";
import CatForm from "../forms/NewCatForm";
import Litters from "../../pages/litters/Litters";

function AppRouter({ cats, addCat, deleteCat, toggleMenu }) {

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
        path="/add"
        element={
          user ? <CatForm addCat={addCat} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/litters"
        element={
          user ? <Litters /> : <Navigate to="/login" />
        }
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/home" : "/login"} />}
      />

    </Routes>
  );
}

export default AppRouter;