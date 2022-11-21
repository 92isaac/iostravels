import React from "react";
import Flight from "../homefiles/Flight";
import Herosection from "../homefiles/Herosection";
import HomeNav from "../homefiles/HomeNav";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
     <Herosection />
     <HomeNav />
     <Flight />
    </div>
  );
};

export default Home;
