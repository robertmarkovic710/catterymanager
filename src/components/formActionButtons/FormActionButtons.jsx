import "./FormActionButtons.css";

export default function FormActionButtons({
    onSave,
    saveText = "Spremi",
    showSave = false,

    onEdit,
    editText = "Uredi",
    showEdit = false,

    onCancel,
    cancelText = "Odustani",
    showCancel = false,

    onDelete,
    deleteText = "Obriši",
    showDelete = false
}) {

    return (

        <div className="form-actions">

            {showSave && (
                <button
                    type="button" className="save-btn" onClick={onSave}>
                    {saveText}
                </button>
            )}

            {showEdit && (
                <button
                    type="button" className="save-btn" onClick={onEdit}>
                    {editText}
                </button>
            )}

            {showCancel && (
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    {cancelText}
                </button>
            )}

            {showDelete && (
                <button type="button" className="delete-btn" onClick={onDelete}>
                    {deleteText}
                </button>
            )}

        </div>
    );
}