import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Cats from "../../pages/cats/Cats";
import NewCatForm from "../forms/newCatForm/NewCatForm";
import CatDetails from "../../pages/catDetails/CatDetails";
import Litters from "../../pages/litters/Litters";
import NewLitterForm from "../forms/newLitterForm/NewLitterForm";
import LitterDetails from "../../pages/litterDetails/LitterDetails";
import EditCat from "../../pages/editCat/EditCat";
import EditLitter from "../../pages/editLitter/EditLitter";

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

function AppRouter({ cats, setCats, litters, setLitters, addCat, addLitter, deleteCat, deleteLitter, toggleMenu }) {

  const user = localStorage.getItem("user");

  const routes = [
    {
      path: "/home",
      element: <Home toggleMenu={toggleMenu} />,
    },
    {
      path: "/cats",
      element: (
        <Cats cats={cats} />
      ),
    },
    {
      path: "/cat/:id",
      element: (
        <CatDetails cats={cats} litters={litters} deleteCat={deleteCat} />
      ),
    },
    {
      path: "/addCat",
      element:
        <NewCatForm addCat={addCat} />,
    },
    {
      path: "/editCat/:id",
      element: (
        <EditCat cats={cats} setCats={setCats} />
      ),
    },
    {
      path: "/litters",
      element: (
        <Litters cats={cats} litters={litters} />
      ),
    },
    {
      path: "/litter/:id",
      element: (
        <LitterDetails litters={litters} cats={cats} deleteLitter={deleteLitter} />
      ),
    },
    {
      path: "/addLitter",
      element: (
        <NewLitterForm addLitter={addLitter} cats={cats} />
      ),
    },
    {
      path: "/editLitter/:id",
      element: (
        <EditLitter litters={litters} setLitters={setLitters} cats={cats}/>
      ),
    },
  ];

  return (
    <Routes>

      <Route
        path="/login"
        element={
          user ? <Navigate to="/home" /> : <Login toggleMenu={toggleMenu} />
        }
      />

      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute user={user}>
              {route.element}
            </ProtectedRoute>
          }
        />
      ))}

      <Route
        path="*"
        element={
          <Navigate to={user ? "/home" : "/login"} />
        }
      />

    </Routes>
  );
}

export default AppRouter;