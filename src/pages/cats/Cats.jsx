import { useNavigate } from "react-router-dom";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import "./Cats.css";

function Cats({ cats, deleteCat }) {
  const navigate = useNavigate();

  return (
    <div className="cats-page">
      <h1 className="cats-title">Naše mačke</h1>
      {cats.length === 0 ? (
        <p className="empty-message">
          Nemaš još unesenih mačaka.
        </p>
      ) : (
        <div className="cat-grid">
          {cats.map((cat) => (
            <div key={cat.id} className="cat-card" onClick={() => navigate(`/cat/${cat.id}`)}>
              
              <h3>{cat.name}</h3>
              <p><span>Pasmina:</span> {cat.breed}</p>
              <p><span>Godine:</span> {cat.age}</p>
              <p><span>Spol:</span> {cat.gender}</p>

            </div>
          ))}
        </div>
      )}

      <button
          className="add-btn"
          onClick={() => navigate("/addCat")}
          title="Dodaj mačku"
        >
        <MdAdd />
      </button>

    </div>
  );
}

export default Cats;