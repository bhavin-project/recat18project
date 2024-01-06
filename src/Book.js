export const Book = (props) => {
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
      <button
        type="button"
        name="clickBtn"
        onClick={() => props.bookfun(props.keyvalue)}
        id="clickBtn"
      >
        Click me!!!
      </button>
    </article>
  );
};
