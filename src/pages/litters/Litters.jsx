import "./Litters.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdAdd, MdVaccines, MdSort } from "react-icons/md";

function Litters({ maleCats, femaleCats, litters }) {

  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("desc");

  const getCatMom = (motherId) => {
    return femaleCats.find(cat => cat.id === motherId);
  };

  const getCatDad = (fatherId) => {
    return maleCats.find(cat => cat.id === fatherId);
  };

  const sortedLitters = [...litters].sort((a, b) => {

    const dateA = new Date(
      `${a.birthDate}T${a.birthTime}`
    );

    const dateB = new Date(
      `${b.birthDate}T${b.birthTime}`
    );

    return sortOrder === "desc"
      ? dateB - dateA
      : dateA - dateB;
  });

  const formatDate = (dateString) => {

    if (!dateString) return "";

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");

    const month = String(date.getMonth() + 1)
      .padStart(2, "0");

    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className="litters-page">

      <div className="litters-header">

        <h1 className="litters-title">
          Legla
        </h1>

        <MdSort
          className={`sort-icon ${sortOrder === "asc" ? "asc" : ""
            }`}
          onClick={() =>
            setSortOrder(prev =>
              prev === "desc"
                ? "asc"
                : "desc"
            )
          }
          title="Sortiraj"
        />

      </div>

      {litters.length === 0 ? (

        <p className="empty">
          Nema unesenih legla.
        </p>

      ) : (

        <div className="litters-list">

          <div className="litters-list">

            {sortedLitters.map((litter, index) => {

              const litterLetter = String.fromCharCode(65 + index);

              return (

                <div
                  key={litter.id}
                  className="litter-card"
                  onClick={() =>
                    navigate(`/litter/${litter.id}`)
                  }
                >

                <h2>
                  Leglo {litterLetter}
                </h2>

                </div>

              );
            })}

          </div>

        </div>
      )}

      <button
        className="add-btn"
        onClick={() =>
          navigate("/addLitter")
        }
        title="Dodaj leglo"
      >
        <MdAdd />
      </button>

    </div>
  );
}

export default Litters;