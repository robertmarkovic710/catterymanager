import "./NewLitterForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackButton from "../../backButton/BackButton";

function NewLitterForm({ addLitter, maleCats, femaleCats }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({

    motherId: "",
    fatherId: "",
    birthDate: "",
    birthTime: "",
    deliveryType: "",
    totalKittens: "",
    maleKittens: "",
    femaleKittens: "",
    notes: ""
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm({
      ...form,

      [name]:
        type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.motherId || !form.fatherId || !form.birthDate || !form.birthTime || !form.deliveryType) {
      alert("Popuni obavezna polja");
      return;
    }

    const newLitter = {

      id: Date.now(),
      motherId: Number(form.motherId),
      fatherId: Number(form.fatherId),
      birthDate: form.birthDate,
      birthTime: form.birthTime,

      totalKittens: Number(form.totalKittens),
      maleKittens: Number(form.maleKittens),
      femaleKittens: Number(form.femaleKittens),

      deliveryType: form.deliveryType,
      notes: form.notes,

      vaccinations: []
    };

    addLitter(newLitter);

    navigate("/litters");
  };

  return (

    <div className="litters-page">

      <BackButton title="Povratak" />

      <form
        className="litter-form"
        onSubmit={handleSubmit}
      >

        <h2>Novo leglo</h2>

        <div className="form-group">
          <label>Mama</label>
          <select
            name="motherId"
            value={form.motherId}
            onChange={handleChange}
          >
            <option value="">
              Odaberi ženku
            </option>
            {femaleCats.map(cat => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Tata</label>
          <select
            name="fatherId"
            value={form.fatherId}
            onChange={handleChange}
          >
            <option value="">
              Odaberi mužjaka
            </option>
            {maleCats.map(cat => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Datum okota</label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vrijeme okota</label>
          <input
            type="time"
            name="birthTime"
            value={form.birthTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Ukupno mačića</label>
          <input
            type="number"
            name="totalKittens"
            value={form.totalKittens}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">
          <label>Muških mačića</label>
          <input
            type="number"
            name="maleKittens"
            value={form.maleKittens}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Ženskih mačića</label>
          <input
            type="number"
            name="femaleKittens"
            value={form.femaleKittens}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vrsta poroda</label>
          <select
            name="deliveryType"
            value={form.deliveryType}
            onChange={handleChange}
          >
            <option value="">Odaberi</option>
            <option value="Prirodni">Prirodni</option>
            <option value="Carski rez">Carski rez</option>
          </select>

        </div>

        <div className="form-group">
          <label>Napomene</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="primary-btn"
        >
          Dodaj leglo
        </button>

      </form>

    </div>
  );
}

export default NewLitterForm;