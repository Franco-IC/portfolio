import { Zoom, Grid, Tooltip, Typography } from "@mui/material";
import { techStackLinks, techStack } from "../constants/techStack.js";
import FadeIn from "./animations/FadeIn";

function Skills() {
  return (
    <Grid
      item
      xs={2}
      className="m-auto w-full max-w-screen-sm lg:max-w-none pb-[80px] min-h-[800px] text-slate-50 bg-stone-900 text-center"
      id="Skills"
    >
      <FadeIn>
        <Typography className="mt-[100px] max-w-screen-sm text-center text-2xl text-[#dddddd] font-mono lg:max-w-none lg:mb-[20px] lg:text-5xl">
          Technologies that I use for my projects:
        </Typography>
      </FadeIn>

      <div className="grid grid-cols-2 gap-10 gap-y-16 mx-6 lg:inline-grid lg:gap-14 lg:gap-y-20 mt-[100px] lg:mx-0 lg:grid-cols-6">
        {techStack.map((skill, i) => {
          return (
            <FadeIn key={i}>
              <div className="w-[80px] h-[80px] lg:w-[140px] lg:h-[150px] m-auto ">
                <Tooltip
                  title={skill === "JWT" ? "JSON Web Token" : skill}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 300 }}
                  placement="bottom"
                  className="text-[24px]"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        color: "rgb(172, 85, 243)", //rgba(11, 181, 98, 1)
                        padding: "10px",
                        fontFamily: "system-ui",
                        letterSpacing: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      },
                    },
                  }}
                >
                  <img
                    id={skill}
                    src={techStackLinks[techStack[i]]}
                    alt={skill === "JWT" ? "JSON Web Token" : skill}
                    className={`w-[80px] h-[80px] ${
                      skill === "React" ? "lg:w-[120px]" : "lg:w-[100px]"
                    } lg:h-[100px] animated-upwards m-auto`}
                  />
                </Tooltip>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Grid>
  );
}

export default Skills;
