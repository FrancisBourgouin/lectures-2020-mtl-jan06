import React, { useState } from "react";

export const CommitForm = props => {
  const [fetchForm, setFetchForm] = useState({
    owner: "",
    repo: ""
  });
  const { fetchCommits } = props;
  const updateInput = e =>
    setFetchForm({ ...fetchForm, [e.target.name]: e.target.value });
  const { owner, repo } = fetchForm;

  const handleSubmit = e => {
    fetchCommits(e, owner, repo);
  };
  return (
    <section>
      <h2>Enter Owner & Repo info</h2>
      {/* <form onSubmit={e => fetchCommits(e, owner, repo)}> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='owner'
          value={owner}
          onChange={e => setFetchForm({ ...fetchForm, owner: e.target.value })}
          placeholder='Enter github owner'
        />
        <input
          type='text'
          name='repo'
          value={repo}
          onChange={updateInput}
          placeholder='Enter github repository'
        />
        <input type='submit' value='Fetch!' />
      </form>
    </section>
  );
};
