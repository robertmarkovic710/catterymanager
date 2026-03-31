import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {

  const [cats, setCats] = useState(() => {
    const saved = localStorage.getItem("cats");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const addCat = () => {

    if (name === "" || breed === "" || age === "") {
      alert("Popuni sva polja!");
      return;
    }

    const newCat = {
      id: Date.now(),
      name: name,
      breed: breed,
      age: age
    };

    setCats([...cats, newCat]);

    setName("");
    setBreed("");
    setAge("");
  };

  return (
    <div className="container">
      
      <Header title="Cattery Manager" />

      <div className="form-container">
        
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Pasmina"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <input
          type="number"
          placeholder="Godine"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addCat}>
          Dodaj mačku
        </button>

      </div>

      {cats.length === 0 ? (
        <p className="empty-message">
          Nemaš još unesenih mačaka. <br /> Dodaj mačku da započneš!
        </p>
       ) : (
        cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <p><b>Ime:</b> {cat.name}</p>
            <p><b>Pasmina:</b> {cat.breed}</p>
            <p><b>Godine:</b> {cat.age}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default App;