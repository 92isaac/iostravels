import React from 'react'
import '../asset/styles/photogallery.css'
import galleryImg1 from '../asset/images/beach1.png'

const PhotoGallery = () => {
  return (
    <div>
        <div className="slope1">
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        {/* <img src={galleryImg1} alt="" loading='lazy' /> */}
        </div>
        <div className="slope">
            <h5>Gallery</h5>
            <h4>Photos from Our Tours</h4>
        </div>
        <div className="slope2">
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        <img src={galleryImg1} alt="" loading='lazy' />
        </div>
    </div>
  )
}

export default PhotoGallery