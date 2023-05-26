import React, { useState, useEffect } from "react";

const ProductPreviewCard = () => {
  const [BP] = useBP(650);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: BP ? "row" : "column",
          backgroundColor: "red",
          minWidth: BP ? 600 : 300,
          aspectRatio: BP ? 16 / 10 : 10 / 16,
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundImage: "url(https://picsum.photos/200)",
            backgroundSize: "cover",
            height: BP ? "100%" : "50%",
            width: BP ? "50%" : "100%",
            borderRadius: BP ? "10px 0px 0px 10px" : "10px 10px 0px 0px",
          }}
        >
          1
        </div>
        <h1>2</h1>
      </div>
    </>
  );
};

export default ProductPreviewCard;

const useBP = (width = 0) => {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${width}px)`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${width}px)`)
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return [matches];
};
