import { Divider, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { techStackLinks } from "../constants/techStack";
import Appear from "./animations/Appear";

const portfolioStack = [
  "JavaScript",
  "React",
  "MaterialUI",
  "TailwindCSS",
  "FramerMotion",
  "emailjs",
  "react-scroll",
  "react-toastify",
];

function Footer() {
  return (
    <footer className="h-auto p-10 max-w-none bg-gradient-to-br from-purple-950 to-violet-950 text-slate-50 pt-10 lg:h-[300px] ">
      <Appear>
        <div className="m-auto mb-10 lg:w-[90%] h-auto flex justify-between items-center gap-8">
          <span className="">
            <Typography className="text-[18px] font-[Poppins]">
              © {new Date().getFullYear()} | Franco Cuellar
            </Typography>
          </span>

          <span>
            <a
              href="mailto:francoit1999@gmail.com"
              target="_blank"
              className="mr-[10px]"
            >
              <EmailIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-cuellar/"
              target="_blank"
              className="mr-[10px] text-sky-700"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://github.com/Franco-IC"
              target="_blank"
              className="text-neutral-950"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </span>
        </div>

        <Divider variant="middle" className="bg-gray-300"></Divider>

        <div className="m-auto mt-5  w-[90%] h-auto  flex justify-between items-center gap-8">
          <span>
            <Typography className="text-[18px] font-[Poppins] mt-4 mb-2">
              Developed with:
            </Typography>

            <div className="flex flex-row flex-wrap ">
              {portfolioStack.map((skill, i) => {
                return (
                  <div className="w-[60px] h-[60px] m-auto" key={i}>
                    <Tooltip
                      componentsProps={{
                        tooltip: {
                          sx: {
                            fontSize: "13px",
                            color: "white", //rgba(11, 181, 98, 1)
                            padding: "10px",
                            fontFamily: "system-ui",
                            letterSpacing: "1px",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                          },
                        },
                      }}
                      title={skill === "JWT" ? "JSON Web Token" : skill}
                      placement="bottom"
                    >
                      <img
                        src={
                          techStackLinks[portfolioStack[i]]
                            ? techStackLinks[portfolioStack[i]]
                            : techStackLinks["codeDefault"]
                        }
                        alt={
                          skill === "JWT" ? "JSON Web Token" : `${skill} logo`
                        }
                        className="w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]"
                      />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </span>

          <span></span>
        </div>
      </Appear>
    </footer>
  );
}

export default Footer;
