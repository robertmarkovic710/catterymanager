import "./CatDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../components/backButton/BackButton";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function CatDetails({ cats, litters, deleteCat }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const cat = cats.find(
        c => c.id === Number(id)
    );

    if (!cat) {
        return <p>Mačka nije pronađena.</p>;
    }

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

    return (

        <div className="details-page">

            <BackButton title="Povratak" />

            <div className="main-form">

                <h1 className="details-title">
                    Detalji mačke
                </h1>

                <div className="details-section">

                    <h3>Osnovni podaci</h3>

                    <p>
                        <span>Ime:</span>
                        {" "}
                        {cat.name}
                    </p>

                    <p>
                        <span>Pasmina:</span>
                        {" "}
                        {cat.breed}
                    </p>

                    <p>
                        <span>Dob:</span>
                        {" "}
                        {cat.age}
                    </p>

                    <p>
                        <span>Spol:</span>
                        {" "}
                        {cat.gender}
                    </p>

                </div>

                <FormActionButtons
                    showEdit={true}
                    editText="Uredi detalje mačke"
                    onEdit={handleEdit}
                    showDelete={true}
                    onDelete={handleDelete}
                    deleteText="Obriši mačku"
                />

            </div>

        </div>
    );
}

export default CatDetails;