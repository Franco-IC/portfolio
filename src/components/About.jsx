import { useContext } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { ReposContext } from "../context/ReposContext";
import { aboutMeText } from "../constants/constants.js";
import { techStack } from "../constants/techStack.js";
import SlideIn from "./animations/SlideDown.jsx";
import Loader from "./animations/Loader";

const skills = techStack.length;

function About() {
  const { repos } = useContext(ReposContext);
  const proyectos = repos?.length - 2 || "Cargando";

  return (
    <Grid
      item
      xs={2}
      className="m-auto w-full max-w-fit min-h-screen bg-gradient-to-br from-violet-950 to-indigo-950 w-screen-sm  shadow-lg shadow-black lg:min-w-full lg:max-w-none lg:h-screen lg:pb-[200px]"
      id="About"
    >
      <SlideIn>
        <div className="flex flex-col text-white lg:flex-row lg:place-content-between lg:mt-[100px]">
          <div className="mx-10 w-auto p-6 mb-10  bg-gradient-to-br from-indigo-800 to-violet-950 rounded-xl shadow-lg shadow-black lg:w-auto lg:m-auto lg:p-12">
            <div className="text-left lg:w-fit">
              <Typography className="text-2xl lg:text-3xl font-[Poppins] font-semibold">
                ¡Hola! soy{" "}
                <span className="text-[#ab84ff] font-bold">Franco</span>.
              </Typography>
              <Typography className="text-xl lg:text-1xl font-[Poppins] mt-2 font-semibold">
                Desarrollador Web Full Stack. (MERN)
              </Typography>
            </div>

            <Typography
              variant="body2"
              className="my-[20px] text-left font-[Poppins] text-lg lg:leading-relaxed lg:p-4 lg:mx-0 lg:max-w-5xl lg:text-xl "
            >
              {aboutMeText.title} <br />
              {aboutMeText.body}
              <span className="hidden lg:block">{aboutMeText.body2}</span>{" "}
              <br />
              {aboutMeText.closing} <br />
            </Typography>
          </div>

          <div className="m-auto p-10 mb-[140px] bg-gradient-to-br from-indigo-800 to-violet-950 rounded-xl shadow-lg shadow-black lg:m-auto">
            {repos ? (
              <>
                <Typography variant="h5" className="font-mono">
                  Proyectos: {proyectos}{" "}
                </Typography>{" "}
                <br />
                <Typography variant="h5" className="font-mono">
                  Tecnologías: {skills}{" "}
                </Typography>
              </>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </SlideIn>
    </Grid>
  );
}

export default About;
