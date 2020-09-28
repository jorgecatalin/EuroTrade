import React from "react"
import ImageGallery from "react-image-gallery"

export default function Galerie(props) {
  return (
    <div>
      <div
        className="ContainerGalerieInchide"
        onClick={props.date.inchideGaleria}
      >
        X
      </div>
      <ImageGallery
        items={props.date.poze}
        lazyLoad={true}
        showBullets={true}
        startIndex={props.date.index | 0}
      ></ImageGallery>
    </div>
  )
}
