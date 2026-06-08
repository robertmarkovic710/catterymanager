import "./Exhibitions.css";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../components/addNewButton/addNewButton";

function Exhibitions({ exhibitions }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/addExhibition");
    };

    return (
        <div className="exhibitions-page">
            <div className="exhibitions-page__content">

                <div className="exhibitions-page__header">
                    <h1 className="exhibitions-page__title">
                        Izložbe
                    </h1>
                </div>

                <div className="exhibitions-page__scroll-area">
                    {exhibitions.length === 0 ? (
                        <div className="exhibitions-page__empty-state">
                            Dodaj novu izložbu.
                        </div>
                    ) : (
                        <div className="exhibitions-page__list">
                            {exhibitions.map((exhibition) => (
                                <div
                                    key={exhibition.id}
                                    className="exhibitions-page__card"
                                    onClick={() => navigate(`/exhibition/${exhibition.id}`)}
                                >
                                    <h2 className="exhibitions-page__card-title">
                                        {exhibition.name}
                                    </h2>

                                    <p className="exhibitions-page__card-text">
                                        {exhibition.location}
                                    </p>

                                    <p className="exhibitions-page__card-text">
                                        {exhibition.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            <AddNewButton
                title="Dodaj izložbu"
                handleAction={handleButtonClick}
            />
        </div>
    );
}

export default Exhibitions;