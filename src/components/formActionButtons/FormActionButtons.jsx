import "./FormActionButtons.css";
import { useNavigate } from "react-router-dom";

function FormActions({ onSave, saveText = "Spremi", showCancel = true }) {
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

        </div>
    );
}

export default FormActions;