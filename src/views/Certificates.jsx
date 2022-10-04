import React, { useContext } from "react";
import Certificate1 from "../components/Certificate1";
import Certificate2 from "../components/Certificate2";
import Certificate3 from "../components/Certificate3";
import Certificate4 from "../components/Certificate4";
import { ThemeContext } from "../themeProvider";

const Certificates = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Certificates
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Certificate1 />
          <Certificate2 />
          <Certificate3/>
          <Certificate4/>
          
        </div>
      </div>
    </div>
  );
};

export default Certificates;
