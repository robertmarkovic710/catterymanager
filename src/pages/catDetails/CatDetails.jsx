import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditCatForm from "../../components/forms/editCatForm/EditCatForm";
import "./CatDetails.css";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function CatDetails({ cats, setCats }) {

    const navigate = useNavigate();
    const { id } = useParams();
    const cat = cats.find(c => c.id === Number(id));

    if (!cat) return <p>Mačka nije pronađena</p>;

    const [form, setForm] = useState({ ...cat, litters: cat.litters || [] });

    const handleSave = () => {
        const updated = cats.map(c =>
            c.id === cat.id ? form : c
        );
        setCats(updated);
        navigate("/cats");
    };

    const partners = [];

    cats.forEach(c => {
        (c.litters || []).forEach(litter => {

            // ako je trenutna mačka mama
            if (litter.motherId === cat.id) {
                partners.push(litter.fatherName);
            }

            // ako je trenutna mačka tata
            if (litter.fatherId === cat.id) {
                partners.push(litter.motherName);
            }
        });
    });

    const uniquePartners = [...new Set(partners)];

    const handleDelete = () => {
        if (form.litters && form.litters.length > 0) {
            const confirmDelete = window.confirm(
                "Ova mačka ima legla. Brisanjem ćeš obrisati i sva legla. Nastaviti?"
            );
            if (!confirmDelete) return;
        } else {
            const confirmDelete = window.confirm("Jesi siguran da želiš obrisati mačku?");
            if (!confirmDelete) return;
        }

        const updated = cats.filter(c => c.id !== cat.id);

        setCats(updated);
        navigate("/cats");
    };

    return (
        <div className="details-page">

            <div className="main-form">

                <EditCatForm form={form} setForm={setForm} />

                <FormActionButtons
                    onSave={handleSave}
                    saveText="Spremi izmjene"
                    onDelete={handleDelete}
                    showDelete={true}
                />

            </div>

            <div className="partner-box">

                <h3>
                    {cat.gender === "Mužjak"
                        ? "Partnerice"
                        : "Partneri"}
                </h3>

                {uniquePartners.length === 0 ? (
                    <p>Nema partnera.</p>
                ) : (
                    <ul>
                        {uniquePartners.map((partner, index) => (
                            <li key={index}>{partner}</li>
                        ))}
                    </ul>
                )}

            </div>
            
        </div>
    );
}

export default CatDetails;