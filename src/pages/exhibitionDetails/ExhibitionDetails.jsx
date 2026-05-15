import "./ExhibitionDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import BackArrowButton from "../../components/backArrowButton/BackArrowButton";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function ExhibitionDetails({ exhibitions, deleteExhibition }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const exhibition = exhibitions.find(
        exhibition => exhibition.id === Number(id)
    );

    if (!exhibition) {
        return <p>Izložba nije pronađena.</p>;
    }

    const handleDelete = () => {

        const confirmed = window.confirm(
            "Jesi siguran da želiš obrisati izložbu?"
        );

        if (!confirmed) return;

        const deleted = deleteExhibition(
            exhibition.id
        );

        if (deleted) {
            navigate("/exhibitions");
        }
    };

    const handleEdit = () => {
        navigate(`/editExhibition/${exhibition.id}`);
    };

    const handleBack = () => {
        navigate("/exhibitions");
    };

    return (

        <div className="exhibition-details-page">

            <BackArrowButton
                title="Povratak"
                handleReturn={handleBack}
            />

            <div className="exhibition-main-form">

                <h1 className="exhibition-details-title">
                    Detalji izložbe
                </h1>

                <div className="exhibition-details-section">

                    <h3>Osnovni podaci</h3>

                    <p>
                        <span>Naziv:</span>
                        {" "}
                        {exhibition.name}
                    </p>

                    <p>
                        <span>Lokacija:</span>
                        {" "}
                        {exhibition.location}
                    </p>

                    <p>
                        <span>Datum:</span>
                        {" "}
                        {exhibition.date}
                    </p>

                </div>

                <FormActionButtons
                    showEdit={true}
                    editText="Uredi izložbu"
                    onEdit={handleEdit}

                    showDelete={true}
                    deleteText="Obriši izložbu"
                    onDelete={handleDelete}
                />

            </div>

        </div>
    );
}

export default ExhibitionDetails;