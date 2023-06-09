import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { getRepos } from "../utils/reposFetch.js";

export const ReposContext = createContext();

export function ReposContextProvider({ children }) {
  const [repos, setRepos] = useState([]);

  async function loadRepos() {
    const data = await getRepos();

    setRepos(data);
  }

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <ReposContext.Provider value={{ repos }}>{children}</ReposContext.Provider>
  );
}
