import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", file);

    axios.post("http://localhost:5000/api/avatar", formData);
    setFile(null);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
