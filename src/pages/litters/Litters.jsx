import "./Litters.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdAdd, MdSort } from "react-icons/md";

function Litters({ litters }) {

  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("desc");

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
      )}

      <button
        className="add-btn"
        onClick={() =>
          navigate("/addLitter")
        }
        title="Dodaj novo leglo"
      >
        <MdAdd />
      </button>

    </div>
  );
}

export default Litters;