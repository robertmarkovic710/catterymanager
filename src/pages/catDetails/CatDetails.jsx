import { useParams, useNavigate  } from "react-router-dom";
import { useState } from "react";
import EditCatForm from "../../components/forms/editCatForm/EditCatForm";
import "./CatDetails.css";

function CatDetails({ cats, setCats }) {

    const navigate = useNavigate();
    const { id } = useParams();
    const cat = cats.find(c => c.id === Number(id));

    if (!cat) return <p>Mačka nije pronađena</p>;

    const [form, setForm] = useState({...cat, litters: cat.litters || []});

    const handleSave = () => {
        const updated = cats.map(c =>
            c.id === cat.id ? form : c
        );
        setCats(updated);
        navigate("/cats");
    };

    return (
        <div className="details-page">

            <div className="main-form">

                <EditCatForm form={form} setForm={setForm} />
            
                <button className="save-btn" onClick={handleSave}>
                    Spremi
                </button>

            </div>

        </div>
  );
}

export default CatDetails;