import "./FormActionButtons.css";
import { useNavigate } from "react-router-dom";

export default function FormActionButtons({
    onSave,
    saveText = "Spremi",
    showCancel = true,
    onDelete,
    deleteText = "Obriši",
    showDelete = false
}) {

    const navigate = useNavigate();

    return (
        <div className="form-actions">

            <button className="save-btn" onClick={onSave}>
                {saveText}
            </button>

            {showCancel && (
                <button
                    className="cancel-btn"
                    onClick={() => navigate(-1)}
                >
                    Odustani
                </button>
            )}

            {showDelete && (
                <button className="delete-btn" onClick={onDelete}>
                    {deleteText}
                </button>
            )}

        </div>
    );
}