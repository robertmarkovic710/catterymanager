import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/" className="header-title">Cattery Manager</Link>
        <p>Elegantan sustav za upravljanje tvojom uzgajivačnicom</p>
      </div>
      
    </div>
  );
}

export default Header;