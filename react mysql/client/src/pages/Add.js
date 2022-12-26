import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
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
      await axios.post("http://localhost:8800/books", inputs);
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

export default Add;
