import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import { Book } from "./Book";

const BookList = () => {
  const valueSome = "Displaying Content";
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>Best Seller</h1>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book
              imgsrc={book.imgsrc}
              alt={book.alt}
              title={book.title}
              author={book.author}
              keyvalue={book.id}
              bookfun={getBook}
            />
          );
        })}
      </section>
    </>
  );
};

const EventTesting = () => {
  const handleEvent = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Target Name", e.target.name);
    console.log("Target Value", e.target.value);
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="txtOne"
          id="txtOne"
          onChange={handleEvent}
        ></input>
        <button onClick={handleEvent}>Click me</button>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
