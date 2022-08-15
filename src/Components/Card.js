import React from "react";

function Card({ subject, lessons, src }) {
  return (
    <div className="card">
      {/* <img
        src={src}
        style={
          {
            // width: "11.85rem",
          }
        }
        className="card-img-top"
        alt="..."
      /> */}
      <div
        className="courseI"
        style={{
          backgroundColor: "red",
          width: "100%",
          height: "7rem",
          padding: "0.2rem",
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundClip: "content-box",
          borderRadius: "0.5rem",
        }}
      ></div>

      <div className="card-body">
        <h5
          className="card-title"
          style={{
            fontSize: "1.1rem",
          }}
        >
          {subject}
        </h5>
        <p className="card-text">{lessons} lessons</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
