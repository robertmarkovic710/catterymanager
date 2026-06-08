import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import "./Cats.css";

function Cats({ cats }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredCats = cats.filter((cat) =>
    cat.name
      .toLowerCase()
      .startsWith(search.toLowerCase())
  );

  return (
    <div className="cats-page">
      <div className="cats-page__content">

        <div className="cats-page__header">
          <h1 className="cats-page__title">
            Naše mačke
          </h1>

          <input
            type="text"
            placeholder="Pretraži ime mace"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="cats-page__search-input"
          />
        </div>

        <div className="cats-page__cards-scroll">
          {cats.length === 0 ? (
            <p className="cats-page__empty-message">
              Nemaš još unesenih mačaka.
            </p>
          ) : filteredCats.length === 0 ? (
            <p className="cats-page__empty-message">
              Nema podudaranja.
            </p>
          ) : (
            <div className="cats-page__grid">
              {filteredCats.map((cat) => (
                <div
                  key={cat.id}
                  className="cats-page__card"
                  onClick={() => navigate(`/cat/${cat.id}`)}
                >
                  <h3 className="cats-page__card-title">
                    {cat.name}
                  </h3>

                  <p className="cats-page__card-text">
                    <span className="cats-page__card-label">
                      Pasmina:
                    </span>
                    {" "}
                    {cat.breed}
                  </p>

                  <p className="cats-page__card-text">
                    <span className="cats-page__card-label">
                      Godine:
                    </span>
                    {" "}
                    {cat.age}
                  </p>

                  <p className="cats-page__card-text">
                    <span className="cats-page__card-label">
                      Spol:
                    </span>
                    {" "}
                    {cat.gender}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <button
        className="cats-page__add-btn"
        onClick={() => navigate("/addCat")}
        title="Dodaj mačku"
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default Cats;