import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        imgsrc="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpn3dq-u_XGknKnmy4o9bU0YQyrq6F-XYajgHADytkgm1KwV9EINjzxZIrVp8ZuHbjRusbmNu-wm2oWCHtmP18rGqNCltKlpFRI8rfJ3FN&usqp=CAE"
        title="Legendary"
        author="Stephanie Garber"
        alt="Legendary"
      />
      <Book
        imgsrc="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0IMP3VfKeEUsZjbZtO_5PZdLAbnbBWHQOJzvCIo0OmMflqnssfB6mxyaI1kgq-ArjnJo07OOSiKYYevhjdk6ZVjfuAw3SZrlgCsPuqiU7hQ7CXNidSuUDEA&usqp=CAE"
        title="Demon Copperhead"
        author="Barbara Kingsolver"
        alt="Demon Copperhead"
      />
      <Book
        imgsrc="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxKl12kQSdr09-m6aMzhrqm5lhMqyRZ_dajHh7JXvXaQ2Vxg-NqtgV1XOfzRu2KEu8KkQUMCfmBUQK2s2jWYMRsVYVWF01RzaPyQLiYdM&usqp=CAE"
        title="NW"
        author="Zadie Smith"
        alt="NW"
      />
    </section>
  );
};
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.imgsrc} alt={props.alt} />
      <h2
        style={{
          color: "#6185b8",
          fontSize: "1rem",
          marginBottom: "0.2rem",
        }}
      >
        {props.title}
      </h2>
      <h4 style={{ color: "#e0bf63", fontSize: "0.8rem", marginTop: "0.3rem" }}>
        {props.author}
      </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
