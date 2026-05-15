import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import CatGender from "../../constants/CatGender";
import "./Cats.css";

function Cats({ cats }) {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredCats = cats.filter(cat =>
    cat.name
      .toLowerCase()
      .startsWith(search.toLowerCase())
  );

  return (

    <div className="cats-page">

      <div className="cats-header">

        <h1 className="cats-title">Naše mačke</h1>

        <input
          type="text"
          placeholder="Pretraži ime mace"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />

      </div>

      {cats.length === 0 ? (

        <p className="empty-message">
          Nemaš još unesenih mačaka.
        </p>

      ) : filteredCats.length === 0 ? (

        <p className="empty-message">
          Nema podudaranja.
        </p>

      ) : (

        <div className="cat-grid">

          {filteredCats.map((cat) => (

            <div
              key={cat.id}
              className="cat-card"
              onClick={() =>
                navigate(`/cat/${cat.id}`)
              }
            >

              <h3>{cat.name}</h3>

              <p>
                <span>Pasmina:</span>
                {" "}
                {cat.breed}
              </p>

              <p>
                <span>Godine:</span>
                {" "}
                {cat.age}
              </p>

              <p>
                <span>Spol:</span>
                {" "}
                {cat.gender}
              </p>

            </div>

          ))}

        </div>

      )}

      <button 
        className="add-btn"
        onClick={() =>
          navigate("/addCat")
        }
        title="Dodaj mačku"
      >
        <MdAdd />
      </button>

    </div>
  );
}

export default Cats;