import React from "react";
import Cassette from "./Cassette/Cassette";
import Poster from "./Poster/Poster";
import "./MediaCard.css";

const MediaCard = () => {
  return (
    <>
      <div className="mediacard_content">
        <div className="mediacard_book">
          <div className="mediacard_card">
            <div className="mediacard_img-card"></div>
            <div className="mediacard_add-cart">
              <h5>Sinopsis</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus ipsa, ad labore, quod debitis, temporibus quo laboriosam
              alias magnam eum suscipit dolores dolorem velit numquam blanditiis
              iste animi vitae!
            </div>
            <div className="mediacard_info-card">
              <p>
                <strong>Titulo</strong>
              </p>
              <p>Genero</p>
            </div>
          </div>
          <div
            className="cassette_container"
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "-15px",
              top: "15px",
            }}
          >
            <Cassette label="Come PLantas"></Cassette>
          </div>
          <div className="mediacard_cover">
            <Poster></Poster>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
