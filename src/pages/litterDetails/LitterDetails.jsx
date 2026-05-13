import "./LitterDetails.css";
import BackButton from "../../components/backButton/BackButton";

import { useParams, useNavigate } from "react-router-dom";

import { MdVaccines } from "react-icons/md";

function LitterDetails({ litters, maleCats, femaleCats }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const litter = litters.find(
        l => l.id === Number(id)
    );

    if (!litter) {
        return <p>Leglo nije pronađeno.</p>;
    }

    const mother = femaleCats.find(
        cat => cat.id === litter.motherId
    );

    const father = maleCats.find(
        cat => cat.id === litter.fatherId
    );

    return (
        <div className="details-page">

            <BackButton title="Povratak" />

            <div className="main-form">

                <h1 className="details-title">Detalji legla</h1>

                <div className="details-section">
                    <h3>Roditelji</h3>
                    <p>
                        <span>Mama:</span>
                        {" "}
                        {mother?.name || "Nepoznata"}
                    </p>
                    <p>
                        <span>Tata:</span>
                        {" "}
                        {father?.name || "Nepoznati"}
                    </p>
                </div>

                <div className="details-section">
                    <h3>Okot</h3>
                    <p>
                        <span>Datum:</span>
                        {" "}
                        {litter.birthDate}
                    </p>
                    <p>
                        <span>Vrijeme:</span>
                        {" "}
                        {litter.birthTime}
                    </p>
                    <p>
                        <span>Porod:</span>
                        {" "}
                        {litter.deliveryType}
                    </p>
                </div>

                <div className="details-section">
                    <h3>Mačići</h3>
                    <p>
                        <span>Ukupno:</span>
                        {" "}
                        {litter.totalKittens}
                    </p>
                    <p>
                        <span>Mužjaci:</span>
                        {" "}
                        {litter.maleKittens}
                    </p>
                    <p>
                        <span>Ženke:</span>
                        {" "}
                        {litter.femaleKittens}
                    </p>
                </div>

                <div className="details-section">
                    <h3>Zdravlje</h3>
                    <p>
                        <span>Napomene:</span>
                        {" "}
                        {litter.notes || "Nema"}
                    </p>
                </div>

                <button
                    className="vaccination-btn"
                    onClick={() => navigate(`/litter/${litter.id}/vaccinations`)}
                >
                    <MdVaccines />
                    Cjepljenja
                </button>

            </div>
        </div>
    );
}

export default LitterDetails;