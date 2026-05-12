import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LitterDetails.css";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function LitterDetails({ cats, setCats }) {

    const { id } = useParams();
    const navigate = useNavigate();

    let foundLitter = null;
    let motherId = null;

    cats.forEach(cat => {
        const litter = (cat.litters || []).find(l => l.id === Number(id));
        if (litter) {
            foundLitter = litter;
            motherId = cat.id;
        }
    });

    if (!foundLitter) return <p>Leglo nije pronađeno</p>;

    const [form, setForm] = useState({
        ...foundLitter,
        motherId: motherId
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]:
                name === "motherId" || name === "fatherId"
                    ? Number(value)
                    : value
        });
    };

    const handleSave = () => {

        const newMotherId = Number(form.motherId);

        const selectedMother = cats.find(c => c.id === Number(form.motherId));
        const selectedFather = cats.find(c => c.id === Number(form.fatherId));

        form.motherName = selectedMother?.name;
        form.fatherName = selectedFather?.name;

        const updatedCats = cats.map(cat => {

            // same cat mother, just update
            if (cat.id === motherId && motherId === newMotherId) {
                return {
                    ...cat,
                    litters: (cat.litters || []).map(l =>
                        l.id === form.id ? form : l
                    )
                };
            }

            // remove litter from wrong cat mother
            if (cat.id === motherId) {
                return {
                    ...cat,
                    litters: (cat.litters || []).filter(l => l.id !== form.id)
                };
            }

            // add litter to right cat mother
            if (cat.id === newMotherId) {
                return {
                    ...cat,
                    litters: [...(cat.litters || []), form]
                };
            }

            return cat;
        });

        setCats(updatedCats);
        navigate("/litters");
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Jesi siguran da želiš obrisati leglo?");
        if (!confirmDelete) return;

        const updatedCats = cats.map(cat => {
            if (cat.id === motherId) {
                return {
                    ...cat,
                    litters: (cat.litters || []).filter(l => l.id !== form.id)
                };
            }
            return cat;
        });

        setCats(updatedCats);
        navigate("/litters");
    };

    return (
        <div className="details-page">

            <div className="main-form">

                <h2>Podatci o leglu</h2>

                <div className="form-group">
                    <label>Datum okota</label>
                    <input
                        type="datetime-local"
                        name="start"
                        value={form.start}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Mama</label>
                    <select
                        name="motherId"
                        value={form.motherId}
                        onChange={handleChange}
                    >
                        {cats
                            .filter(cat => cat.gender === "Ženka")
                            .map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Tata</label>

                    <select
                        name="fatherId"
                        value={form.fatherId}
                        onChange={handleChange}
                    >
                        {cats
                            .filter(cat => cat.gender === "Mužjak")
                            .map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Vrsta poroda</label>
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="Prirodni">Prirodni</option>
                        <option value="Carski rez">Carski rez</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Broj mačića</label>
                    <input
                        type="number"
                        name="kittens"
                        value={form.kittens}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Komplikacije</label>
                    <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                    />
                </div>

                <FormActionButtons
                    onSave={handleSave}
                    saveText="Spremi izmjene"
                    onDelete={handleDelete}
                    showDelete={true}
                />

            </div>

        </div>
    );
}

export default LitterDetails;