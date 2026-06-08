import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Cats from "../pages/cats/Cats";
import NewCatForm from "../components/forms/newCatForm/NewCatForm";
import CatDetails from "../pages/catDetails/CatDetails";
import Litters from "../pages/litters/Litters";
import NewLitterForm from "../components/forms/newLitterForm/NewLitterForm";
import LitterDetails from "../pages/litterDetails/LitterDetails";
import EditCat from "../pages/editCat/EditCat";
import EditLitter from "../pages/editLitter/EditLitter";
import Exhibitions from "../pages/exhibitions/Exhibitions";
import NewExhibitionForm from "../components/forms/newExhibitionForm/NewExhibitionForm";
import ExhibitionDetails from "../pages/exhibitionDetails/ExhibitionDetails";
import EditExhibition from "../pages/editExhibitions/EditExhibitions";

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

function AppRouter({ cats, setCats, litters, setLitters, addCat, addLitter, deleteCat, deleteLitter, exhibitions, setExhibitions, addExhibition, deleteExhibition, toggleMenu }) {

  const token = localStorage.getItem("token");

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
        <CatDetails cats={cats} litters={litters} deleteCat={deleteCat} exhibitions={exhibitions} />
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
        <NewLitterForm addLitter={addLitter} cats={cats} litters={litters} />
      ),
    },
    {
      path: "/editLitter/:id",
      element: (
        <EditLitter litters={litters} setLitters={setLitters} cats={cats} />
      ),
    },
    {
      path: "/exhibitions",
      element: (
        <Exhibitions exhibitions={exhibitions} />
      ),
    },
    {
      path: "/addExhibition",
      element: (
        <NewExhibitionForm addExhibition={addExhibition} />
      ),
    },
    {
      path: "/exhibition/:id",
      element: (
        <ExhibitionDetails exhibitions={exhibitions} setExhibitions={setExhibitions} deleteExhibition={deleteExhibition} cats={cats} />
      ),
    },
    {
      path: "/editExhibition/:id",
      element: (
        <EditExhibition exhibitions={exhibitions} setExhibitions={setExhibitions} />
      ),
    },
  ];

  return (
    <Routes>

      <Route
        path="/login"
        element={
          token ? <Navigate to="/home" /> : <Login toggleMenu={toggleMenu} />
        }
      />

      <Route
        path="/register"
        element={
          token ? <Navigate to="/home" /> : <Register toggleMenu={toggleMenu} />
        }
      />

      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute user={token}>
              {route.element}
            </ProtectedRoute>
          }
        />
      ))}

      <Route
        path="*"
        element={
          <Navigate to={token ? "/home" : "/login"} />
        }
      />

    </Routes>
  );
}

export default AppRouter;