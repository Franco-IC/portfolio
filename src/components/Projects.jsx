import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { ReposContext } from "../context/ReposContext";
import ProjectCard from "./ProjectCard";
import { projectsText } from "../constants/constants";
import sortReposByDate from "../utils/sortReposByDate";
import FadeIn from "./animations/FadeIn";
import Appear from "./animations/Appear.jsx";
import Loader from "./animations/Loader";

function Projects() {
  const { repos } = useContext(ReposContext);

  return (
    <Grid
      item
      xs={2}
      className="m-auto text-center max-w-fit lg:max-w-none"
      id="Projects"
    >
      <div className="mb-[120px] px-5 lg:p-0  ">
        <Appear>
          <Typography
            variant="h3"
            className="mb-5 text-slate-50 font-mono text-left underline underline-offset-[12px] font-bold "
          >
            {projectsText.title}
          </Typography>

          <Typography className="mb-[50px] ml-5 text-slate-50 text-left max-w-[820px] font-[Poppins] text-lg ">
            {projectsText.body}
          </Typography>
        </Appear>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-y-20 place-content-center place-items-center ">
        {repos ? (
          sortReposByDate(repos).map((repo, i) => {
            return repo.name !== "Franco-IC" && repo.name !== "portfolio" ? (
              <FadeIn key={i} duration={0.7}>
                <ProjectCard props={{ repo }} />
              </FadeIn>
            ) : (
              ""
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </Grid>
  );
}

export default Projects;
