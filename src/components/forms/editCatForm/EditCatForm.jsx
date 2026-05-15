import "./EditCatForm.css";

function EditCatForm({ form, setForm }) {

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (

    <div className="edit-cat-form">

      <h2 className="edit-cat-title">
        Podatci o mački
      </h2>

      <div className="edit-cat-group">

        <label>Ime</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

      </div>

      <div className="edit-cat-group">

        <label>Pasmina</label>

        <select
          name="breed"
          value={form.breed}
          onChange={handleChange}
        >

          <option value="">
            Odaberi pasminu
          </option>

          <option value="Ragdoll">
            Ragdoll
          </option>

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

      </div>

      <div className="edit-cat-group">

        <label>Starost</label>

        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />

      </div>

      <div className="edit-cat-group">

        <label>Spol</label>

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >

          <option value="">
            Odaberi spol
          </option>

          <option value="Ženka">
            Ženka
          </option>

          <option value="Mužjak">
            Mužjak
          </option>

        </select>

      </div>

    </div>
  );
}

export default EditCatForm;