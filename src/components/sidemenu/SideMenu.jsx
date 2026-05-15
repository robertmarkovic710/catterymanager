import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./SideMenu.css";

function SideMenu({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const closeMenu = () => setIsOpen(false);
  const handleLogout = () => {
    localStorage.removeItem("user");
    closeMenu();
    navigate("/login");
  }

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>

        <h2>Izbornik</h2>

        <div className="menu-links">
          <Link to="/home" onClick={closeMenu} className={location.pathname === "/home" ? "active" : ""}>Nadzorna ploča</Link>
          <Link to="/litters" onClick={closeMenu} className={location.pathname === "/litters" ? "active" : ""}>Mališani</Link>
          <Link to="/cats" onClick={closeMenu} className={location.pathname === "/cats" ? "active" : ""} >Roditelji</Link>
          <Link to="/exhibitions" onClick={closeMenu} className={location.pathname === "/exhibitions" ? "active" : ""} >Izložbe</Link>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Odjava
        </button>
      </div>
    </>
  );
}

export default SideMenu;