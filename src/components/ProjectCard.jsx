import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Tooltip,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import formatStringAndTurnFirstLetterToUpperCase from "../utils/formatRepoTitle";
import getRepoProjectStack from "../utils/getRepoProjectStack";
import getRepoScreenshotSrc from "../utils/getRepoScreenshotSrc";
import getRepoDescription from "../utils/getRepoDescription";
import getRepoDate from "../utils/getRepoDate";
import { techStackLinks } from "../constants/techStack.js";
import ZoomIn from "./animations/ZoomIn";

function ProjectCard({ props }) {
  const { repo } = props;
  const techStackNames = getRepoProjectStack(repo?.description);

  return (
    <ZoomIn>
      <Card className="min-h-[450px] max-w-[400px] mx-[20px] lg:mt-[20px] lg:max-w-[420px] lg:mx-5 rounded-none shadow-2xl shadow-gray-900 ">
        <CardHeader
          className="text-slate-900 h-[60px]"
          title={formatStringAndTurnFirstLetterToUpperCase(repo.name)}
          titleTypographyProps={{ fontFamily: "monospace" }}
        />

        <CardMedia
          className="h-[200px] border-y-2 border-solid border-emerald-400"
          image={getRepoScreenshotSrc(repo.description)}
        />

        <CardContent className="text-left p-4 text-slate-950 min-h-[170px] lg:min-h-[250px] lg:max-h-[350px] lg:h-[350px] ">
          <Typography
            variant="body2"
            className="text-base min-h-[90px] font-sans "
          >
            {getRepoDescription(repo.description)}
          </Typography>

          <Typography className="mt-[20px] font-sans ">
            <span className="font-semibold">Última modificación:</span>{" "}
            {getRepoDate(repo.pushed_at)}.
          </Typography>

          <div>
            <Typography className="mt-[20px] mb-[10px] font-sans font-bold">
              Tech Stack:
            </Typography>

            <div className="flex flex-row flex-wrap">
              {techStackNames.map((skill, i) => {
                return (
                  <div className="w-[60px] h-[60px] m-auto" key={i}>
                    <Tooltip
                      title={skill === "JWT" ? "JSON Web Token" : skill}
                      placement="bottom"
                    >
                      <img
                        src={
                          techStackLinks[techStackNames[i]]
                            ? techStackLinks[techStackNames[i]]
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
          </div>
        </CardContent>

        <CardActions className="p-4">
          <Button
            size="small"
            className="animated-upwards text-[#915eff] font-semibold"
          >
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              Deploy <LanguageIcon fontSize="large" />
            </a>
          </Button>

          <Button
            size="small"
            className="animated-upwards text-gray-800 font-semibold"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
          </Button>
        </CardActions>
      </Card>
    </ZoomIn>
  );
}

export default ProjectCard;
