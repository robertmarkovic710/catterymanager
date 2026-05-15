import "./addNewButton.css";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";

export default function addNewButton({ title, handleAction }) {
    const navigate = useNavigate();

    return (
        <button
            className="add-btn"
            onClick={() => handleAction()}
            title={title}
        >
            <MdAdd />
        </button>
    );
}