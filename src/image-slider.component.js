
import React from "react";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const ImageSliderComponent = ({media}) => {
  const images = []
  media.map((item) => {
    return images.push({
      original: item.url,
      thumbnail: item.url
    })
  })
  
  return (
    <div className="wrapper">
      <ImageGallery
        items={images}
        infinite={true}
        lazyLoad={true}
        autoPlay={true}
      />
    </div>
  )
}

export default ImageSliderComponent
