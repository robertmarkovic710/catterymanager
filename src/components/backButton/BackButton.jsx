import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton({ title, handleReturn }) {
    const navigate = useNavigate();

    const handleBack = () => {
        handleReturn();
    };

    return (
        <div className="app-header">
            <button className="back-btn" onClick={handleBack}>
                <IoArrowBack />
            </button>

            <h2 className="header-title">{title}</h2>
        </div>
    );
}