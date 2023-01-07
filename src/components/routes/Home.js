import React from "react";
// import Gallery from "../carousel/Gallery";
import Beach from "../homefiles/Beach";
import Herosection from "../homefiles/Herosection";
import Newsletter from "../homefiles/Newsletter";
import PhotoGallery from "../homefiles/PhotoGallery";
import TripsExplore from "../homefiles/TripsExplore";
import WhyChooseUs from "../homefiles/WhyChooseUs";

const Home = () => {
  return (
    <div >
     <Herosection />
     <TripsExplore />
     <Beach />
     <WhyChooseUs />
     <PhotoGallery />
     {/* <Gallery /> */}
     <Newsletter />
    </div>
  );
};

export default Home;
