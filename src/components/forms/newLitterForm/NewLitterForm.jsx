import "./NewLitterForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowButton from "../../backArrowButton/BackArrowButton";
import CatGender from "../../../constants/CatGender";

function NewLitterForm({ addLitter, cats, litters }) {

  const navigate = useNavigate();

  const maleCats = cats.filter(
    cat => cat.gender === CatGender.MALE
  );

  const femaleCats = cats.filter(
    cat => cat.gender === CatGender.FEMALE
  );

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

    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.motherId ||
      !form.fatherId ||
      !form.birthDate ||
      !form.birthTime ||
      !form.deliveryType
    ) {

      alert("Popuni obavezna polja");

      return;
    }

    const highestLetter = litters.reduce(
      (max, litter) => {

        if (!litter.litterLetter) {
          return max;
        }

        const charCode = litter.litterLetter.charCodeAt(0);

        return Math.max(max, charCode);

      },
      64
    );

    const nextLetter = String.fromCharCode(highestLetter + 1);

    const newLitter = {

      id: Date.now(),
      litterLetter: nextLetter,

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

  const handleBack = () => {
    navigate("/litters");
  }

  return (

    <div className="new-litter-page">

      <BackArrowButton title="Povratak" handleReturn={handleBack}/>

      <form
        className="new-litter-form"
        onSubmit={handleSubmit}
      >

        <h2>Novo leglo</h2>

        <div className="new-litter-group">

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

        <div className="new-litter-group">

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

        <div className="new-litter-group">

          <label>Datum okota</label>

          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            onClick={(e) => e.target.showPicker()}
          />

        </div>

        <div className="new-litter-group">

          <label>Vrijeme okota</label>

          <input
            type="time"
            name="birthTime"
            value={form.birthTime}
            onChange={handleChange}
            onClick={(e) => e.target.showPicker()}
          />

        </div>

        <div className="new-litter-group">

          <label>Ukupno mačića</label>

          <input
            type="number"
            name="totalKittens"
            value={form.totalKittens}
            onChange={handleChange}
          />

        </div>

        <div className="new-litter-group">

          <label>Muških mačića</label>

          <input
            type="number"
            name="maleKittens"
            value={form.maleKittens}
            onChange={handleChange}
          />

        </div>

        <div className="new-litter-group">

          <label>Ženskih mačića</label>

          <input
            type="number"
            name="femaleKittens"
            value={form.femaleKittens}
            onChange={handleChange}
          />

        </div>

        <div className="new-litter-group">

          <label>Vrsta poroda</label>

          <select
            name="deliveryType"
            value={form.deliveryType}
            onChange={handleChange}
          >

            <option value="">
              Odaberi
            </option>

            <option value="Prirodni">
              Prirodni
            </option>

            <option value="Carski rez">
              Carski rez
            </option>

          </select>

        </div>

        <div className="new-litter-group">

          <label>Napomene</label>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />

        </div>

        <button
          type="submit"
          className="new-litter-submit-btn"
        >
          Dodaj leglo
        </button>

      </form>

    </div>
  );
}

export default NewLitterForm;