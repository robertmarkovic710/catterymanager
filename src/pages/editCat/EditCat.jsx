import "./EditCat.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function EditCat({ cats, setCats }) {

    const navigate = useNavigate();

    const { id } = useParams();

    const cat = cats.find(
        c => c.id === Number(id)
    );

    if (!cat) {
        return <p>Mačka nije pronađena</p>;
    }

    const [form, setForm] = useState({
        ...cat
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setCats(prev =>
            prev.map(c => c.id === form.id ? form : c
            )
        );
        navigate(`/cat/${cat.id}`);
    };

    const handleCancel = () => {
        navigate(`/cat/${cat.id}`);
    };

    return (

        <div className="edit-cat-page">

            <div className="edit-cat-main-form">

                <div className="edit-cat-form">

                    <h2 className="edit-cat-title">
                        Podatci o mački
                    </h2>

                    <div className="edit-cat-group">

                        <label>Ime</label>

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-cat-group">

                        <label>Pasmina</label>

                        <select
                            name="breed"
                            value={form.breed}
                            onChange={handleChange}
                        >

                            <option value="">
                                Odaberi pasminu
                            </option>

                            <option value="Ragdoll">
                                Ragdoll
                            </option>

                            <option value="Britanska kratkodlaka">
                                Britanska kratkodlaka
                            </option>

                            <option value="Maine Coon">
                                Maine Coon
                            </option>

                            <option value="Sijamska">
                                Sijamska
                            </option>

                            <option value="Perzijska">
                                Perzijska
                            </option>

                            <option value="Bengalska">
                                Bengalska
                            </option>

                            <option value="Sfinks">
                                Sfinks
                            </option>

                        </select>

                    </div>

                    <div className="edit-cat-group">

                        <label>Starost</label>

                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="edit-cat-group">

                        <label>Spol</label>

                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                        >

                            <option value="">
                                Odaberi spol
                            </option>

                            <option value="Ženka">
                                Ženka
                            </option>

                            <option value="Mužjak">
                                Mužjak
                            </option>

                        </select>

                    </div>

                </div>

                <FormActionButtons
                    showSave={true}
                    onSave={handleSave}
                    saveText="Spremi podatke"

                    showCancel={true}
                    onCancel={handleCancel}
                    cancelText="Odustani"
                />

            </div>

        </div>
    );
}

export default EditCat;