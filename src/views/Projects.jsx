import React, { useContext } from "react";
import Card1 from "../components/Project1";
import Card2 from "../components/Project2";
import Card3 from "../components/Project3";
import Card4 from "../components/Project4";
import Card5 from "../components/Project5";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
      </div>
    </div>
  );
};

export default Projects;
