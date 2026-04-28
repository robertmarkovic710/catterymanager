import "./Litters.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewLitterForm from "../../components/forms/newLitterForm/NewLitterForm";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

function Litters({ cats }) {
  const navigate = useNavigate();

  const allLitters = cats.flatMap(cat =>
    (cat.litters || []).map(l => ({
      ...l, 
      mother: cat.name
    }))
  );

  return (
    <div className="litters-page">

      <h1 className="litters-title">Legla</h1>

      {allLitters.length === 0 ? (
        <p className="empty">Nema unesenih legla.</p>
      ) : (
        <div className="litters-list">

          {allLitters.map(litter => (
            <div key={litter.id} className="litter-card" onClick={() => navigate(`/litter/${litter.id}`)}>

              <div className="litter-left">
                <h3>Mama: {litter.mother}</h3>
                <p><span>Početak:</span> {litter.start}</p>
                <p><span>Mačići:</span> {litter.kittens}</p>
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