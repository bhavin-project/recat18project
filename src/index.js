import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const author = "S. Jaishankar";
const title = "Why Bharat Matters";
const imgsrc =
  "https://images-eu.ssl-images-amazon.com/images/I/71Hqj4xb0XL._AC_UL600_SR600,400_.jpg";
const alt = "Why Bharat Matters";
const Book = () => {
  return (
    <article className="book">
      <img src={imgsrc} alt={alt} />
      <h2
        style={{
          color: "#6185b8",
          fontSize: "0.85rem",
          marginBottom: "0.2rem",
        }}
      >
        {title}
      </h2>
      <h4 style={{ color: "#e0bf63", fontSize: "0.5rem", marginTop: "0.3rem" }}>
        {author}
      </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
