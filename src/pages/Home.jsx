import "./css/Home.css";
import { GrCentos } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";

function Home({ toggleMenu }) {
  return (
    <div className="home-page">

      <div className="home-menu-icon" onClick={toggleMenu}>
        <GrAppsRounded />
      </div>

      <h1 className="home-title">
        Informacijski sustav za uzgoj mačaka
      </h1>

    </div>
  );
}

export default Home;