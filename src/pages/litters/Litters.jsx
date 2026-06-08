import "./Litters.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdAdd, MdSort } from "react-icons/md";

function Litters({ litters }) {
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("desc");

  const sortedLitters = [...litters].sort((a, b) => {
    const letterA = a.litterLetter.charCodeAt(0);
    const letterB = b.litterLetter.charCodeAt(0);

    return sortOrder === "desc"
      ? letterB - letterA
      : letterA - letterB;
  });

  const handleSort = () => {
    setSortOrder((prev) =>
      prev === "desc"
        ? "asc"
        : "desc"
    );
  };

  return (
    <div className="litters-page">
      <div className="litters-page__content">
        <div className="litters-page__header">
          <h1 className="litters-page__title">
            Legla
          </h1>

          <button
            type="button"
            className={`litters-page__sort-button ${sortOrder === "asc" ? "litters-page__sort-button--asc" : ""
              }`}
            onClick={handleSort}
            title="Sortiraj"
          >
            <MdSort />
          </button>
        </div>

        <div className="litters-page__scroll-area">
          {litters.length === 0 ? (
            <p className="litters-page__empty-message">
              Nema unesenih legla.
            </p>
          ) : (
            <div className="litters-page__list">
              {sortedLitters.map((litter) => (
                <div
                  key={litter.id}
                  className="litters-page__card"
                  onClick={() => navigate(`/litter/${litter.id}`)}
                >
                  <h2 className="litters-page__card-title">
                    Leglo {litter.litterLetter}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="litters-page__add-button"
        onClick={() => navigate("/addLitter")}
        title="Dodaj novo leglo"
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default Litters;