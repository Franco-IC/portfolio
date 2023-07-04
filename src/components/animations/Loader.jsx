import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div>
      <p className="mb-5 font-mono">Loading... </p>
      <CircularProgress />
    </div>
  );
}

export default Loader;
