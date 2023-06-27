import { Divider, Grid } from "@mui/material";
import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function MainContent() {
  return (
    <main>
      <Grid
        container
        spacing={10}
        direction={"column"}
        className="min-h-screen bg-purple-950 content-center xs:w-screen xs:max-w-fit lg:max-w-none"
      >
        <About />

        <Projects />
        <Divider className="bg-slate-950 mt-[80px]" />

        <Skills />

        <Contact />
      </Grid>

      <Divider className="bg-slate-950" />
    </main>
  );
}

export default MainContent;
