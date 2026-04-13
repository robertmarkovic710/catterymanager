import { Link } from "react-router-dom";
import "./Header.css";

function Header({ toggleMenu }) {
  return (
    <div className="header">
      <div className="header-content">

        <span className="menu-icon" onClick={toggleMenu}>
          ☰
        </span>

        <Link to="/" className="header-title">
          Informacijski sustav za uzgoj mačaka
        </Link>

      </div>
    </div>
  );
}

export default Header;