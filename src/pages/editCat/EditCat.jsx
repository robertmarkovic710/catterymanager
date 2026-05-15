import "./EditCat.css"
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditCatForm from "../../components/forms/editCatForm/EditCatForm";
import FormActionButtons from "../../components/formActionButtons/FormActionButtons";

function EditCat({ cats, setCats }) {

    const navigate = useNavigate();

    const { id } = useParams();

    const cat = cats.find(c => c.id === Number(id));

    if (!cat) {
        return <p>Mačka nije pronađena</p>;
    }

    const [form, setForm] = useState({
        ...cat
    });

    const handleSave = () => {

        setCats(prev =>
            prev.map(c =>
                c.id === form.id
                    ? form
                    : c
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

                <EditCatForm
                    form={form}
                    setForm={setForm}
                />

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