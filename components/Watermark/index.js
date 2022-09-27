/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { imageFormatter } from "../../utils/imageFormatter";
import Config from "../../app.json";
import { Watermark } from "@hirohe/react-watermark";

const WatermarkComponent = ({ product }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width || 700);

  //console.log(imageFormatter(screenWidth,product))

  return (
    <>
      <Watermark
        text={Config.watermark_text}
        textColor="#808080"
        textSize={35}
        rotate={0}
        gutter={150}
        wrapperStyle={{ minHeight: 150 }}
      >
        <img
          src={product ? imageFormatter(screenWidth, product) : "/logo.png"}
          alt={product.title}
        />
      </Watermark>
    </>
  );
};

export default WatermarkComponent;
