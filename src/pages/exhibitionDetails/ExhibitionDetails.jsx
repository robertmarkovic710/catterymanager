import "./ExhibitionDetails.css";

import { useParams, useNavigate } from "react-router-dom";

import BackButton from "../../components/backButton/BackButton";

function ExhibitionDetails({
    exhibitions,
    deleteExhibition
}) {

    const { id } = useParams();

    const navigate = useNavigate();

    const exhibition = exhibitions.find(
        exhibition => exhibition.id === Number(id)
    );

    if (!exhibition) {

        return (

            <div className="exhibition-details-page">

                <BackButton />

                <h1>Exhibition not found.</h1>

            </div>
        );
    }

    const handleDelete = () => {

        deleteExhibition(exhibition.id);

        navigate("/exhibitions");
    };

    return (

        <div className="exhibition-details-page">

            <BackButton />

            <div className="exhibition-details-card">

                <h1>{exhibition.name}</h1>

                <div className="details-section">

                    <h3>Location</h3>

                    <p>{exhibition.location}</p>

                </div>

                <div className="details-section">

                    <h3>Date</h3>

                    <p>{exhibition.date}</p>

                </div>

                <button
                    className="delete-btn"
                    onClick={handleDelete}
                >
                    Delete Exhibition
                </button>

            </div>

        </div>
    );
}

export default ExhibitionDetails;