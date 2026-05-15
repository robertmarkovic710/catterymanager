import "./NewExhibitionForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowButton from "../../backArrowButton/BackArrowButton";

function NewExhibitionForm({ addExhibition }) {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [location, setLocation] = useState("");

    const [date, setDate] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newExhibition = {

            id: Date.now(),

            name,

            location,

            date
        };

        addExhibition(newExhibition);

        navigate("/exhibitions");
    };

    const handleBack = () => {
        navigate('/exhibitions');
    }

    return (

        <div className="new-exhibition-page">

            <BackArrowButton title="Povratak" handleReturn={handleBack}/>

            <form
                className="new-exhibition-form"
                onSubmit={handleSubmit}
            >

                <h2>Add Exhibition</h2>

                <input
                    type="text"
                    placeholder="Exhibition name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onClick={(e) => e.target.showPicker()}
                    required
                />

                <button type="submit">
                    Dodaj izložbu
                </button>

            </form>

        </div>
    );
}

export default NewExhibitionForm;