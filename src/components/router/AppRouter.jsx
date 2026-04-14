import { Routes, Route } from "react-router-dom";

import CatForm from "../forms/NewCatForm";
import Home from "../../pages/home/Home";
import Cats from "../../pages/cats/Cats";

function AppRouter({ cats, deleteCat, addCat, toggleMenu }) {
  return (
    <Routes>

      <Route path="/" element={
        <Home toggleMenu={toggleMenu} />
      } />

      <Route path="/cats" element={
        <Cats cats={cats} deleteCat={deleteCat} />
      } />

      <Route path="/add" element={
        <CatForm addCat={addCat} />
      } />

    </Routes>
  );
}

export default AppRouter;