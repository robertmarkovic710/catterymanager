import "./EditExhibitions.css";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function EditExhibition({ exhibitions, setExhibitions }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const exhibition = exhibitions.find(
        exhibition => exhibition.id === Number(id)
    );

    if (!exhibition) {

        return (
            <div className="edit-exhibition-page">
                <p>Izložba nije pronađena.</p>
            </div>
        );
    }

    const [name, setName] = useState(
        exhibition.name
    );

    const [location, setLocation] = useState(
        exhibition.location
    );

    const [date, setDate] = useState(
        exhibition.date
    );

    const handleSave = (e) => {
        e.preventDefault();

        setExhibitions(prev =>
            prev.map(exh =>
                exh.id === exhibition.id
                    ? {
                        ...exh,
                        name,
                        location,
                        date
                    }
                    : exh
            )
        );
        navigate(`/exhibition/${id}`);
    };

    const handleCancel = () => {
        navigate(`/exhibition/${id}`);
    };

    return (

        <div className="edit-exhibition-page">

            <div className="edit-exhibition-main-form">

                <form
                    className="edit-exhibition-form"
                    onSubmit={handleSave}
                >

                    <h2 className="edit-exhibition-title">
                        Uredi izložbu
                    </h2>

                    <div className="edit-exhibition-group">

                        <label>Naziv izložbe</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            placeholder="Unesi naziv izložbe"
                            required
                        />

                    </div>

                    <div className="edit-exhibition-group">

                        <label>Lokacija</label>

                        <input
                            type="text"
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)
                            }
                            placeholder="Unesi lokaciju"
                            required
                        />

                    </div>

                    <div className="edit-exhibition-group">

                        <label>Datum</label>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) =>
                                setDate(e.target.value)
                            }
                            onClick={(e) => e.target.showPicker()}
                            required
                        />

                    </div>

                    <FormActionButtons
                        showSave={true}
                        onSave={handleSave}
                        saveText="Spremi"

                        showCancel={true}
                        onCancel={handleCancel}
                        cancelText="Odustani"
                    />

                </form>
            </div>
        </div>
    );
}

export default EditExhibition;