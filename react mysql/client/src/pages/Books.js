import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    console.log("deleted");
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="books">
      <Link to="/add" className="add">
        <span>+</span>
      </Link>
      {books.map((book) => (
        <div key={book.id} className="book">
          <img src="{book.cover}" alt="" className="cover" />
          <div className="title">{book.title}</div>
          <span className="desc">{book.desc}</span>
          <span className="price">{book.price}</span>
          <button className="delete" onClick={() => handleDelete(book.id)}>
            delete
          </button>
          <Link to="/update">update</Link>
        </div>
      ))}
    </div>
  );
}

export default Books;
