import React from "react";
import MediaCard from "./assets/MediaCard";

function CasseteCard() {
  const ExampleOBJ = {
    img: "https://picsum.photos/id/237/200/300", //an URL String,
    heading: "Sinopsis", // a String for the small top title
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus ipsa, ad labore, quod debitis, temporibus quo laboriosam alias magnam eum suscipit dolores dolorem velit numquam blanditiis iste animi vitae!", //a String with the paragraph
    title: "Titulo", // The small lower title
    sub: "Genero", //The subtitle
    id: "MF", //The character on the casette
  };

  return <MediaCard obj={ExampleOBJ}></MediaCard>;
}

export default CasseteCard;
