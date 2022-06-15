/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { imageFormatter } from '../../utils/imageFormatter'
import Image from 'next/image'
import Config from '../../app.json'
import dynamic from 'next/dynamic'

var waterMarkOptions = {
  init: function (img) {
    img.crossOrigin = '';
  }
};

const ReactWaterMark = dynamic(import('react-watermark-component'),
{ ssr: false }
)

const WatermarkComponent = ({ product }) => {
  
  const options = {
    chunkWidth: 260,
    chunkHeight: 200,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 1,
    font: "24px Microsoft Yahei",
    fillStyle: "#f00"
  }

  const [screenWidth,setScreenWidth] = useState(window.screen.width || 700)

  // const waterMarkImage = () => {
  //   watermark([imageFormatter(screenWidth,product), '/logo.png'], waterMarkOptions)
  //   .image(watermark.image.lowerRight(0.5))
  //   .then((img) => document.getElementById(`${product.title.split(' ')[0]}`).appendChild(img))   
  // }

  useEffect(() => {
    // waterMarkImage()
  },[])

  return <>
  {/* <div src='' alt={product.title} id={product.title.split(' ')[0]} style={{ width: 300, height: 120 }}>
  </div> */}
      
      <ReactWaterMark waterMarkText={Config.watermark_text} options={options}>
        <Image
          src={product ? imageFormatter(screenWidth,product) || '/services1.jpg' : '/services1.jpg'}
          alt={product.title}
          width={297}
          height={126}
        />
      </ReactWaterMark>
  </>
}

export default WatermarkComponent