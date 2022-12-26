import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState([
    {
      title: "",
      desc: "",
      cover: "",
      price: null,
    },
  ]);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input placeholder="title" name="title" onChange={handleChange} />
      <input placeholder="desc" name="desc" onChange={handleChange} />
      <input placeholder="cover" name="cover" onChange={handleChange} />
      <input placeholder="price" name="price" onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default Update;
