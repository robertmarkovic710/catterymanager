import "./Exhibitions.css";
import { useNavigate } from "react-router-dom";

function Exhibitions({ exhibitions, deleteExhibition }) {

    const navigate = useNavigate();

    return (

        <div className="exhibitions-page">

            <div className="exhibitions-header">

                <h1>Izložbe</h1>

                <button
                    className="add-exhibition-btn"
                    onClick={() => navigate("/addExhibition")}
                >
                    + Nova izložba
                </button>

            </div>

            <div className="exhibitions-container">

                {exhibitions.length === 0 ? (

                    <div className="empty-state">
                        Dodaj novu izložbu.
                    </div>

                ) : (

                    exhibitions.map((exhibition) => (

                        <div
                            key={exhibition.id}
                            className="exhibition-card"
                            onClick={() => navigate(`/exhibition/${exhibition.id}`)}
                        >

                            <h2>{exhibition.name}</h2>

                            <p>{exhibition.location}</p>

                            <p>{exhibition.date}</p>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
}

export default Exhibitions;