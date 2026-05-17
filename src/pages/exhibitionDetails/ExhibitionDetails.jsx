import "./ExhibitionDetails.css";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BackArrowButton from "../../components/backArrowButton/BackArrowButton";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function ExhibitionDetails({
    exhibitions = [],
    setExhibitions,
    deleteExhibition,
    cats = []
}) {

    const { id } = useParams();

    const navigate = useNavigate();

    const [selectedCatId, setSelectedCatId] = useState("");

    const exhibition = exhibitions.find(
        exhibition => exhibition.id === Number(id)
    );

    if (!exhibition) {

        return (
            <div className="exhibition-details-page">
                <p className="exhibition-details-not-found">
                    Izložba nije pronađena.
                </p>
            </div>
        );
    }

    const registeredCatIds = exhibition.registeredCatIds || [];

    const registeredCats = cats.filter(cat =>
        registeredCatIds.includes(cat.id)
    );

    const availableCats = cats.filter(cat =>
        !registeredCatIds.includes(cat.id)
    );

    const handleBack = () => {
        navigate("/exhibitions");
    };

    const handleEdit = () => {
        navigate(`/editExhibition/${exhibition.id}`);
    };

    const handleDelete = () => {

        const confirmed = window.confirm(
            "Jesi siguran da želiš obrisati izložbu?"
        );

        if (!confirmed) return;

        deleteExhibition(exhibition.id);

        navigate("/exhibitions");
    };

    const handleRegisterCat = (e) => {
        e.preventDefault();

        if (!selectedCatId) {
            alert("Odaberi mačku koju želiš prijaviti.");
            return;
        }

        const catId = Number(selectedCatId);

        if (registeredCatIds.includes(catId)) {
            alert("Ova mačka je već prijavljena na izložbu.");
            return;
        }

        setExhibitions(prevExhibitions =>
            prevExhibitions.map(exh =>
                exh.id === exhibition.id
                    ? {
                        ...exh,
                        registeredCatIds: [
                            ...(exh.registeredCatIds || []),
                            catId
                        ]
                    }
                    : exh
            )
        );

        setSelectedCatId("");
    };

    const handleRemoveCatFromExhibition = (catId) => {

        const confirmed = window.confirm(
            "Jesi siguran da želiš ukloniti ovu mačku s izložbe?"
        );

        if (!confirmed) return;

        setExhibitions(prevExhibitions =>
            prevExhibitions.map(exh =>
                exh.id === exhibition.id
                    ? {
                        ...exh,
                        registeredCatIds: (exh.registeredCatIds || []).filter(
                            registeredCatId => registeredCatId !== catId
                        )
                    }
                    : exh
            )
        );
    };

    return (

        <div className="exhibition-details-page">

            <BackArrowButton
                title="Povratak"
                handleReturn={handleBack}
            />

            <div className="exhibition-details-card">

                <h1 className="exhibition-details-title">
                    Detalji izložbe
                </h1>

                <div className="exhibition-details-section">

                    <h3 className="exhibition-details-section-title">
                        Osnovni podaci
                    </h3>

                    <p className="exhibition-details-row">
                        <span className="exhibition-details-label">
                            Naziv:
                        </span>
                        {" "}
                        {exhibition.name}
                    </p>

                    <p className="exhibition-details-row">
                        <span className="exhibition-details-label">
                            Lokacija:
                        </span>
                        {" "}
                        {exhibition.location}
                    </p>

                    <p className="exhibition-details-row">
                        <span className="exhibition-details-label">
                            Datum:
                        </span>
                        {" "}
                        {exhibition.date}
                    </p>

                </div>

                <form
                    className="exhibition-details-section"
                    onSubmit={handleRegisterCat}
                >

                    <h3 className="exhibition-details-section-title">
                        Prijava mačke
                    </h3>

                    <div className="exhibition-details-register-group">

                        <label className="exhibition-details-register-label">
                            Prijavi mačku za izložbu
                        </label>

                        <select
                            className="exhibition-details-register-select"
                            value={selectedCatId}
                            onChange={(e) =>
                                setSelectedCatId(e.target.value)
                            }
                        >

                            <option value="">
                                Odaberi mačku
                            </option>

                            {availableCats.map(cat => (

                                <option
                                    key={cat.id}
                                    value={cat.id}
                                >
                                    {cat.name}
                                </option>
                            ))}

                        </select>

                    </div>

                    <button
                        type="submit"
                        className="exhibition-details-save-registration-button"
                    >
                        Spremi
                    </button>

                </form>

                <div className="exhibition-details-section">

                    <h3 className="exhibition-details-section-title">
                        Prijavljene mačke
                    </h3>

                    {registeredCats.length === 0 ? (

                        <p className="exhibition-details-row">
                            Nema prijavljenih mačaka.
                        </p>

                    ) : (

                        <div className="exhibition-details-registered-cats-list">

                            {registeredCats.map(cat => (

                                <div
                                    key={cat.id}
                                    className="exhibition-details-registered-cat-item"
                                >

                                    <span className="exhibition-details-registered-cat-name">
                                        {cat.name}
                                    </span>

                                    <button
                                        type="button"
                                        className="exhibition-details-remove-cat-button"
                                        onClick={() =>
                                            handleRemoveCatFromExhibition(cat.id)
                                        }
                                    >
                                        Ukloni
                                    </button>

                                </div>
                            ))}

                        </div>
                    )}

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