import "./EditLitter.css";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function EditLitter({ litters, setLitters, cats }) {

    const navigate = useNavigate();

    const { id } = useParams();

    const litter = litters.find(
        l => l.id === Number(id)
    );

    if (!litter) {
        return <p>Leglo nije pronađeno</p>;
    }

    const [form, setForm] = useState({
        ...litter
    });

    const femaleCats = cats.filter(
        cat => cat.gender === "Ženka"
    );

    const maleCats = cats.filter(
        cat => cat.gender === "Mužjak"
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {

        setLitters(prev =>
            prev.map(l =>
                l.id === form.id
                    ? form
                    : l
            )
        );

        navigate(`/litter/${litter.id}`);
    };

    const handleCancel = () => {
        navigate(`/litter/${litter.id}`);
    };

    return (

        <div className="edit-litter-page">

            <div className="edit-litter-main-form">

                <div className="edit-litter-form">

                    <h2 className="edit-litter-title">
                        Uredi leglo
                    </h2>

                    <div className="edit-litter-group">

                        <label>Mama</label>

                        <select
                            name="motherId"
                            value={form.motherId}
                            onChange={handleChange}
                        >

                            <option value="">
                                Odaberi mamu
                            </option>

                            {femaleCats.map(cat => (

                                <option
                                    key={cat.id}
                                    value={cat.id}
                                >
                                    {cat.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="edit-litter-group">

                        <label>Tata</label>

                        <select
                            name="fatherId"
                            value={form.fatherId}
                            onChange={handleChange}
                        >

                            <option value="">
                                Odaberi tatu
                            </option>

                            {maleCats.map(cat => (

                                <option
                                    key={cat.id}
                                    value={cat.id}
                                >
                                    {cat.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="edit-litter-group">

                        <label>Datum</label>

                        <input
                            type="date"
                            name="birthDate"
                            value={form.birthDate}
                            onChange={handleChange}
                            onClick={(e) => e.target.showPicker()}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Vrijeme</label>

                        <input
                            type="time"
                            name="birthTime"
                            value={form.birthTime}
                            onClick={(e) => e.target.showPicker()}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Porod</label>

                        <input
                            type="text"
                            name="deliveryType"
                            value={form.deliveryType}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Ukupno mačića</label>

                        <input
                            type="number"
                            name="totalKittens"
                            value={form.totalKittens}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Mužjaci</label>

                        <input
                            type="number"
                            name="maleKittens"
                            value={form.maleKittens}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Ženke</label>

                        <input
                            type="number"
                            name="femaleKittens"
                            value={form.femaleKittens}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-litter-group">

                        <label>Napomene</label>

                        <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <FormActionButtons
                    onSave={handleSave}
                    saveText="Spremi podatke"
                    showSave={true}

                    onCancel={handleCancel}
                    cancelText="Odustani"
                    showCancel={true}
                />

            </div>

        </div>
    );
}

export default EditLitter;