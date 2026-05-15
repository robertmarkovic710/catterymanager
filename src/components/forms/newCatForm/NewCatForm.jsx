import "./NewCatForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../backButton/BackButton";
import CatGender from "../../../constants/CatGender";

function CatForm({ addCat }) {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    let newErrors = {};

    if (!name) newErrors.name = "Ime je obavezno";
    if (!breed) newErrors.breed = "Odaberi pasminu";
    if (!age || parseInt(age) < 1) newErrors.age = "Starost mora biti ≥ 1";
    if (!gender) newErrors.gender = "Odaberi spol";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newCat = {
      id: Date.now(),
      name,
      breed,
      age: Number(age),
      gender
    };

    addCat(newCat);

    navigate("/cats");
  };

  return (

    <div className="new-cat-page">

      <BackButton title="Povratak" />

      <form
        className="new-cat-card"
        onSubmit={handleSubmit}
      >

        <h2>Nova uzgojna mačka</h2>

        <input
          type="text"
          placeholder="Ime mačke"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && (
          <p className="new-cat-error">
            {errors.name}
          </p>
        )}

        <input
          type="number"
          min="1"
          placeholder="Starost (godine)"
          value={age}
          onChange={(e) => {

            const value = e.target.value;

            if (value === "" || parseInt(value) >= 1) {
              setAge(value);
            }
          }}
        />

        {errors.age && (
          <p className="new-cat-error">
            {errors.age}
          </p>
        )}

        <select
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >

          <option value="">
            Odaberi pasminu
          </option>

          <option value="Ragdoll">Ragdoll</option>

          <option value="Britanska kratkodlaka">
            Britanska kratkodlaka
          </option>

          <option value="Maine Coon">
            Maine Coon
          </option>

          <option value="Sijamska">
            Sijamska
          </option>

          <option value="Perzijska">
            Perzijska
          </option>

          <option value="Bengalska">
            Bengalska
          </option>

          <option value="Sfinks">
            Sfinks
          </option>

        </select>

        {errors.breed && (
          <p className="new-cat-error">
            {errors.breed}
          </p>
        )}

        <div className="new-cat-gender-toggle">

          <button
            type="button"
            className={
              gender === CatGender.MALE
                ? "new-cat-active"
                : ""
            }
            onClick={() => setGender(CatGender.MALE)}
          >
            Mužjak
          </button>

          <button
            type="button"
            className={
              gender === CatGender.FEMALE
                ? "new-cat-active"
                : ""
            }
            onClick={() => setGender(CatGender.FEMALE)}
          >
            Ženka
          </button>

        </div>

        {errors.gender && (
          <p className="new-cat-error">
            {errors.gender}
          </p>
        )}

        <button
          type="submit"
          className="new-cat-submit-btn"
        >
          Dodaj mačku
        </button>

      </form>

    </div>
  );
}

export default CatForm;