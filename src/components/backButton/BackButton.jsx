import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton({ title }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/home");
        }
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