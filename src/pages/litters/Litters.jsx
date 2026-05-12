import "./Litters.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewLitterForm from "../../components/forms/newLitterForm/NewLitterForm";
import { MdAdd, MdDelete, MdEdit, MdSort } from "react-icons/md";

function Litters({ cats }) {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("desc");

  const allLitters = cats.flatMap(cat =>
    (cat.litters || []).map(l => ({
      ...l
    }))
  );

  const sortedLitters = [...allLitters].sort((a, b) => {
    const dateA = new Date(a.start);
    const dateB = new Date(b.start);

    return sortOrder === "desc"
      ? dateB - dateA
      : dateA - dateB;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <div className="litters-page">

      <div className="litters-header">
        <h1 className="litters-title">Legla</h1>

        <MdSort
          className={`sort-icon ${sortOrder === "asc" ? "asc" : ""}`}
          onClick={() =>
            setSortOrder(prev => prev === "desc" ? "asc" : "desc")
          }
          title="Sortiraj"
        />
      </div>

      {allLitters.length === 0 ? (
        <p className="empty">Nema unesenih legla.</p>
      ) : (
        <div className="litters-list">

          {sortedLitters.map(litter => (
            <div key={litter.id} className="litter-card" onClick={() => navigate(`/litter/${litter.id}`)}>

              <div className="litter-left">
                <h3>Mama: {litter.mother}</h3>
                <p><span>Tata:</span> {litter.fatherName}</p>
                <p><span>Početak:</span> {formatDateTime(litter.start)}</p>
                <p><span>Mačića:</span> {litter.kittens}</p>
                <p>
                  <span>Komplikacije:</span>{" "}
                  {litter.notes
                    ? litter.notes.length > 30
                      ? litter.notes.substring(0, 30) + "..."
                      : litter.notes
                    : "Nema"}
                </p>
              </div>

              <div className="litter-right">
                <p>{litter.type}</p>
              </div>

            </div>
          ))}

        </div>
      )}

      <button
        className="add-btn"
        onClick={() => navigate("/addLitter")}
        title="Dodaj mačku"
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default Litters;