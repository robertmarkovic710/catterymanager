import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home({ toggleMenu }) {

  const navigate = useNavigate();

  return (
    <div className="home-page">

        <div className="dashboard-container">
            <div className="dashboard-left">
                <h1 className="home-title">Dashboard</h1>
                <p className="home-subtitle">Dobrodošli u sustav.</p>
            </div>

            <div className="dashboard-right">
                <div className="dashboard-cards">
                    <div className="card" onClick={() => navigate("/cats")}>
                        <h3>Uzgojni parovi</h3>
                        <p>Pregled svih mačaka</p>
                    </div>

                    <div className="card" onClick={() => navigate("/addCat")}>
                        <h3>Dodaj mačku</h3>
                        <p>Unesi novu uzgojnu mačku</p>
                    </div>

                    <div className="card" onClick={() => navigate("/litters")}>
                        <h3>Legla</h3>
                        <p>Pregled svih legla</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
  );
}

export default Home;