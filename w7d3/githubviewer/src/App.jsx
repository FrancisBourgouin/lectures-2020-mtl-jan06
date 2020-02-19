import React, { useState, useEffect } from "react";
import { CommitList } from "./CommitList";
import "./App.css";
import Axios from "axios";
import { CommitForm } from "./CommitForm";
import { useGithubAPI } from "./useGithubAPI";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

function App() {
  const [name, setName] = useState("Francis");
  const [repoData, isLoading, setRepoParams] = useGithubAPI();
  const { commits, branches, url } = repoData;

  return (
    <div className='App'>
      <h1>{name}'s Github viewer ! ;D</h1>
      <CommitForm setRepoParams={setRepoParams} />
      <CommitList commits={commits} isLoading={isLoading} />
    </div>
  );
}

export default App;
