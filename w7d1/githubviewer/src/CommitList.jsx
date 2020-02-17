import React from "react";
import { Commit } from "./Commit";

export const CommitList = props => {
  const { commits: _commits } = props;

  const commits = _commits.map(commit => (
    <Commit
      name={commit.commit.author.name}
      message={commit.commit.message}
      date={commit.commit.author.date}
    />
  ));

  return (
    <div className='Commits'>
      <h2>Commit list</h2>
      <ul>{commits}</ul>
    </div>
  );
};
