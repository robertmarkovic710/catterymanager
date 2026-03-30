import { useState } from "react";

function App() {
  const [cats, setCats] = useState([]);

  return (
    <div>
      <h1>Welcome to my Cattery Manager homepage.</h1>
    </div>
  );
}

export default App;