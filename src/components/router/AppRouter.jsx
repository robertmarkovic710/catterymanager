import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Cats from "../../pages/cats/Cats";
import CatForm from "../forms/newCatForm/NewCatForm";
import CatDetails from "../../pages/catDetails/CatDetails";
import Litters from "../../pages/litters/Litters";
import NewLitterForm from "../forms/newLitterForm/NewLitterForm";
import LitterDetails from "../../pages/litterDetails/LitterDetails";

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

function AppRouter({ maleCats, femaleCats, litters, addLitter, addCat, deleteCat, toggleMenu }) {

  const user = localStorage.getItem("user");

  const routes = [
    {
      path: "/home",
      element: <Home toggleMenu={toggleMenu} />,
    },
    {
      path: "/cats",
      element: (
        <Cats maleCats={maleCats} femaleCats={femaleCats} deleteCat={deleteCat}/>
      ),
    },
    {
      path: "/addCat",
      element: <CatForm addCat={addCat} />,
    },
    {
      path: "/litters",
      element: (
        <Litters
          maleCats={maleCats} femaleCats={femaleCats} litters={litters}
        />
      ),
    },
    {
      path: "/addLitter",
      element: (
        <NewLitterForm addLitter={addLitter} maleCats={maleCats} femaleCats={femaleCats}/>
      ),
    },
    {
      path: "/cat/:id",
      element: (
        <CatDetails maleCats={maleCats} femaleCats={femaleCats}/>
      ),
    },
    {
      path: "/litter/:id",
      element: (
        <LitterDetails litters={litters} maleCats={maleCats} femaleCats={femaleCats}/>
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