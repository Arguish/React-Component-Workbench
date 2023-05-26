import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const useAnimSin = (time) => {
  const [counter, setcounter] = useState(0);
  const [frame, setframe] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setframe(animSin()), time);
    return () => clearTimeout(timer);
  }, [counter]);
  const animSin = () => {
    let result = 0;
    result = Math.sin(counter);
    setcounter(counter + 0.1);
    //console.log(counter);
    //console.log(result);
    return result;
  };
  return [frame];
};

const QRCard = ({
  url,
  desc,
  bgColor = "#eee",
  color1 = "#555",
  color2 = "#000",
  time = 30,
}) => {
  const [anim] = useAnimSin(time);
  const [webTitle, setwebTitle] = useState("");

  useEffect(() => {
    handleTitle();
  }, []);

  const handleTitle = async () => {
    const result = await (await fetch(url)).text();
    setwebTitle(
      result.slice(result.indexOf("<title>") + 7, result.indexOf("</title>"))
    );
  };
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          width: "300px",
          minwidth: "300px",
          aspectRatio: "10/16",
          borderRadius: "10px",
        }}
      >
        <a href={url} target="blank">
          <div
            style={{
              background: `linear-gradient(0deg, ${color1} ${
                anim * 20
              }%,  ${color2} 100%)`,
              margin: "13px auto",
              width: "90%",
              aspectRatio: "1/1",
              borderRadius: `${20 + anim * 10}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all ease 500ms",
            }}
          >
            <QRCode
              bgColor="#00000000"
              fgColor={bgColor}
              level="H"
              title={webTitle}
              size={200}
              style={{ height: "auto", aspectRatio: "1/1", width: "50%" }}
              value={url}
            />
          </div>
        </a>
        <div style={{ textAlign: "center", margin: "5px" }}>
          <h2>{webTitle}</h2>
          <p style={{ fontSize: "14px", color: "gray" }}>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default QRCard;
