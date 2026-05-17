import "./CatDetails.css";

import { useParams, useNavigate } from "react-router-dom";

import BackArrowButton from "../../components/backArrowButton/BackArrowButton";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function CatDetails({
    cats,
    litters,
    deleteCat,
    exhibitions = []
}) {

    const { id } = useParams();

    const navigate = useNavigate();

    const cat = cats.find(
        cat => cat.id === Number(id)
    );

    if (!cat) {

        return (
            <div className="cat-details-page">
                <p className="cat-details-not-found">
                    Mačka nije pronađena.
                </p>
            </div>
        );
    }

    const catExhibitions = exhibitions.filter(exhibition =>
        (exhibition.registeredCatIds || []).includes(cat.id)
    );

    const handleDelete = () => {

        const isParent = litters.some(
            litter =>
                litter.motherId === cat.id ||
                litter.fatherId === cat.id
        );

        if (isParent) {

            alert(
                "Mačka je roditelj u leglu i ne može se obrisati."
            );

            return;
        }

        const confirmed = window.confirm(
            "Jesi siguran da želiš obrisati mačku?"
        );

        if (!confirmed) return;

        const deleted = deleteCat(cat.id);

        if (deleted) {
            navigate("/cats");
        }
    };

    const handleEdit = () => {
        navigate(`/editCat/${cat.id}`);
    };

    const handleBack = () => {
        navigate("/cats");
    };

    return (

        <div className="cat-details-page">

            <BackArrowButton
                title="Povratak"
                handleReturn={handleBack}
            />

            <div className="cat-details-card">

                <h1 className="cat-details-title">
                    Detalji mačke
                </h1>

                <div className="cat-details-section">

                    <h3 className="cat-details-section-title">
                        Osnovni podaci
                    </h3>

                    <p className="cat-details-row">
                        <span className="cat-details-label">
                            Ime:
                        </span>
                        {" "}
                        {cat.name}
                    </p>

                    <p className="cat-details-row">
                        <span className="cat-details-label">
                            Pasmina:
                        </span>
                        {" "}
                        {cat.breed}
                    </p>

                    <p className="cat-details-row">
                        <span className="cat-details-label">
                            Dob:
                        </span>
                        {" "}
                        {cat.age}
                    </p>

                    <p className="cat-details-row">
                        <span className="cat-details-label">
                            Spol:
                        </span>
                        {" "}
                        {cat.gender}
                    </p>

                </div>

                <div className="cat-details-section">

                    <h3 className="cat-details-section-title">
                        Izložbe
                    </h3>

                    {catExhibitions.length === 0 ? (

                        <p className="cat-details-row">
                            Mačka nije prijavljena ni na jednu izložbu.
                        </p>

                    ) : (

                        <div className="cat-details-exhibitions-list">

                            {catExhibitions.map(exhibition => (

                                <div
                                    key={exhibition.id}
                                    className="cat-details-exhibition-item"
                                >

                                    <p className="cat-details-row">
                                        <span className="cat-details-label">
                                            {exhibition.name}
                                        </span>
                                    </p>

                                    <p className="cat-details-row">
                                        {exhibition.location}
                                        {" "}
                                        - 
                                        {" "}
                                        {exhibition.date}
                                    </p>

                                </div>
                            ))}

                        </div>
                    )}

                </div>

                <FormActionButtons
                    showEdit={true}
                    editText="Uredi mačku"
                    onEdit={handleEdit}

                    showDelete={true}
                    deleteText="Obriši mačku"
                    onDelete={handleDelete}
                />

            </div>

        </div>
    );
}

export default CatDetails;