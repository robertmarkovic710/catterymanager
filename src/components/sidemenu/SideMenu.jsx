import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu({ isOpen, setIsOpen }) {

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>

        <h2>Izbornik</h2>

        <Link to="/" onClick={closeMenu}>Početna</Link>
        <Link to="/cats" onClick={closeMenu}>Uzgojni parovi</Link>
        <Link to="/litters" onClick={closeMenu}>Legla</Link>

      </div>
    </>
  );
}

export default SideMenu;