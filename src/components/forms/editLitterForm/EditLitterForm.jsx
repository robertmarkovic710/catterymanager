import "./EditLitterForm.css";

function EditLitterForm({
    form,
    setForm,
    cats
}) {

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

    return (

        <div className="edit-litter-form">

            <h2>Uredi leglo</h2>

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
                />
            </div>

            <div className="edit-litter-group">
                <label>Vrijeme</label>

                <input
                    type="time"
                    name="birthTime"
                    value={form.birthTime}
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
    );
}

export default EditLitterForm;