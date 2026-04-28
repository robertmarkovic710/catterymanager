import "./NewLitterForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../backButton/BackButton";

function NewLitterForm({ addLitter, cats }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    start: "",
    end: "",
    type: "",
    kittens: "",
    notes: "",
    motherId: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.motherId || !form.start || !form.type || !form.kittens) {
      alert("Popuni obavezna polja");
      return;
    }

    const selectedCat = cats.find(
      c => c.id === Number(form.motherId)
    );

    const newLitter = {
      id: Date.now(),
      start: form.start,
      end: form.end,
      type: form.type,
      kittens: form.kittens,
      notes: form.notes,
      motherId: form.motherId,
      motherName: selectedCat.name
    };

    addLitter(newLitter, form.motherId);

    navigate("/litters");
  };

  return (
    <div className="litters-page">

      <BackButton title="Povratak" />

      <form className="litter-form" onSubmit={handleSubmit}>

        <h2>Novo leglo</h2>

        <div className="form-group">
          <label>Datum okota</label>
          <input
            type="datetime-local"
            name="start"
            value={form.start}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mama</label>
          <select
            name="motherId"
            value={form.motherId}
            onChange={handleChange}
          >
            <option value="">Odaberi ženku</option>

            {cats
              .filter(cat => cat.gender === "Ženka")
              .map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label>Vrsta poroda</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="">Odaberi</option>
            <option value="Prirodni">Prirodni</option>
            <option value="Carski rez">Carski rez</option>
          </select>
        </div>

        <div className="form-group">
          <label>Broj mačića</label>
          <input
            type="number"
            name="kittens"
            value={form.kittens}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Komplikacije</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="primary-btn">
          Dodaj leglo
        </button>

      </form>

    </div>
  );
}

export default NewLitterForm;