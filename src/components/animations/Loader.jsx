import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div>
      <p className="mb-5 font-mono">Cargando... </p>
      <CircularProgress />
    </div>
  );
}

export default Loader;
