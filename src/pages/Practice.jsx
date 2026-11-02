import { useState } from "react";

function Practice() {
  const [name, setName] = useState(
    () => localStorage.getItem("name") || ""
  );

  function saveName() {
    localStorage.setItem("name", name);
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={saveName}>
        Save Name
      </button>

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default Practice;