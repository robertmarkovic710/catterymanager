import "./EditLitter.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditLitterForm from "../../components/forms/editLitterForm/EditLitterForm";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function EditLitter({
    litters,
    setLitters,
    cats
}) {

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

        <div className="details-page">

            <div className="main-form">

                <EditLitterForm
                    form={form}
                    setForm={setForm}
                    cats={cats}
                />

                <FormActionButtons
                    onSave={handleSave}
                    saveText="Spremi"
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