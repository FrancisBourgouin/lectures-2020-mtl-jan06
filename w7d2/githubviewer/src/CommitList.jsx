import React from "react";
import { Commit } from "./Commit";

export const CommitList = props => {
  const { commits: _commits, isLoading } = props;

  const commits = _commits
    ? _commits.map(commit => (
        <Commit
          name={commit.commit.author.name}
          message={commit.commit.message}
          date={commit.commit.author.date}
        />
      ))
    : undefined;

  return (
    <div className='Commits'>
      <h2>Commit list</h2>
      <ul>{commits}</ul>
      {!commits && !isLoading && <p>THERE IS NO COMMITS YET</p>}
      {isLoading && <p>I AM LOADING</p>}
    </div>
  );
};
