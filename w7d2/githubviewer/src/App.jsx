import React, { useState, useEffect } from "react";
import { CommitList } from "./CommitList";
import "./App.css";
import Axios from "axios";
import { CommitForm } from "./CommitForm";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

function App() {
  const [name, setName] = useState("Francis");
  const [isLoading, setIsLoading] = useState(false);
  const [listOfCommits, setListOfCommits] = useState(undefined);

  const fetchCommits = (event, owner, repo) => {
    event.preventDefault();
    setIsLoading(true);
    setName("Chicken");
    console.log(`https://api.github.com/repos/${owner}/${repo}/commits`);
    Axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then(res => setListOfCommits(res.data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    console.log("I AM USEFFECT");
    Axios.get(
      "https://api.github.com/repos/FrancisBourgouin/lectures-2020-mtl-jan06/commits"
    )
      .then(res => {
        console.log(res.data);
        setListOfCommits(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log("HAHAHAHHAH ITS LOADING ");
    } else {
      console.log("OH ITS STOPPED NOW");
    }
  }, [isLoading]);

  return (
    <div className='App'>
      <h1>{name}'s Github viewer ! ;D</h1>
      <CommitForm fetchCommits={fetchCommits} />
      <CommitList commits={listOfCommits} isLoading={isLoading} />
    </div>
  );
}

export default App;
