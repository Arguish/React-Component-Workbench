import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const QRCard = ({
  url,
  desc,
  bgColor = "#eee",
  color1 = "#555",
  color2 = "#000",
}) => {
  useEffect(() => {
    handleTitle();
  }, []);

  const handleTitle = async () => {
    const result = await (await fetch(url)).text();
    setwebTitle(
      result.slice(result.indexOf("<title>") + 7, result.indexOf("</title>"))
    );
  };
  const [webTitle, setwebTitle] = useState("");
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          width: "250px",
          aspectRatio: "10/16",
          borderRadius: "20px",
        }}
      >
        <a href={url} target="blank">
          <div
            style={{
              background: `linear-gradient(0deg, ${color1} 0%,  ${color2} 100%)`,
              margin: "13px auto",
              width: "224px",
              aspectRatio: "1/1",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode
              bgColor="#00000000"
              fgColor={bgColor}
              level="H"
              title={webTitle}
              size={200}
              style={{ height: "auto", maxWidth: "90%", width: "90%" }}
              value={url}
            />
          </div>
        </a>
        <div style={{ textAlign: "center", margin: "5px" }}>
          <h1>{webTitle}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default QRCard;
