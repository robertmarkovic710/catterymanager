import "./Exhibitions.css";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../components/addNewButton/addNewButton";

function Exhibitions({ exhibitions }) {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/addExhibition');
    }

    return (

        <div className="exhibitions-page">

            <div className="exhibitions-header">

                <h1>Izložbe</h1>

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

            <AddNewButton title="Dodaj izložbu" handleAction={handleButtonClick} />
        </div>
    );
}

export default Exhibitions;