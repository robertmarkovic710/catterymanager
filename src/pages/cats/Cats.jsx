import { useNavigate } from "react-router-dom";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import "./Cats.css";

function Cats({ cats, deleteCat }) {
  const navigate = useNavigate();

  return (
    <div className="cats-page">

      {cats.length === 0 ? (
        <p className="empty-message">
          Nemaš još unesenih mačaka.
        </p>
      ) : (
        <div className="cat-grid">
          {cats.map((cat) => (
            <div key={cat.id} className="cat-card">

              <div className="card-actions">
                <button className="icon-btn">
                  <MdEdit />
                </button>

                <button
                  className="icon-btn delete"
                  onClick={() => deleteCat(cat.id)}
                >
                  <MdDelete />
                </button>
              </div>

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
        onClick={() => navigate("/add")}
        title="Dodaj mačku"
      >
        <MdAdd />
      </button>

    </div>
  );
}

export default Cats;