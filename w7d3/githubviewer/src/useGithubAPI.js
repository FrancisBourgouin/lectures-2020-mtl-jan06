import React, { useState, useEffect } from "react";
import Axios from "axios";

// useGithubAPI({owner:bob, repo:bob})
export const useGithubAPI = defaultRepoParams => {
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setRepoData] = useState({
    url: undefined,
    commits: undefined,
    branches: undefined
  });
  const baseRepoParams = defaultRepoParams
    ? defaultRepoParams
    : {
        owner: undefined,
        repo: undefined
      };

  const [repoParams, setRepoParams] = useState(baseRepoParams);
  const { owner, repo } = repoParams;
  // const { commits: commitList, branches: branchList, url: repoUrl } = repoData;

  useEffect(() => {
    if (owner && repo) {
      Promise.all([
        Axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`),
        Axios.get(`https://api.github.com/repos/${owner}/${repo}/branches`)
      ])
        .then(res =>
          setRepoData({
            url: `https://github.com/${owner}/${repo}/`,
            commits: res[0].data,
            branches: res[1].data
          })
        )
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [owner, repo]);

  return [repoData, isLoading, setRepoParams];
};
