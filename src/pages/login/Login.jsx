import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login({ toggleMenu }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
      if (user) {
        navigate("/home");
      }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Unesi korisničko ime i lozinku");
      return;
    }

    if (username === "admin" && password === "admin") {
      localStorage.setItem("user", username);
      navigate("/home");
    } else {
      alert("Pogrešni podaci");
    }
  };

  return (
    <div className="home-page">

      <div className="home-content">

        <h1 className="home-title">
          Informacijski sustav za uzgoj mačaka
        </h1>

        <form className="form-card-login" onSubmit={loginUser}>

          <h2>Prijavi se</h2>

          <input
            type="text"
            placeholder="Unesite korisničko ime (admin)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Unesite lozinku (admin)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn1">
            Prijavi se
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;