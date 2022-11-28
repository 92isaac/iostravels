import React from "react";
import Beach from "../homefiles/Beach";
import Herosection from "../homefiles/Herosection";
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
    </div>
  );
};

export default Home;
