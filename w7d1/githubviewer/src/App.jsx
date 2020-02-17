import React from "react";
import logo from "./logo.svg";
import commitList from "./json/master.json";
import { CommitList } from "./CommitList";
import "./App.css";
import { Commit } from "./Commit";

function App() {
  const name = "Francis";
  console.log(commitList);
  const secretCondition = Math.random() > 0.4;
  return (
    <div className='App'>
      {secretCondition && <h1>{name}'s Github viewer ! ;D</h1>}
      <div className='Branches'>
        <h2>Branch list</h2>
        <div className='Branch'>
          <ul>
            <li>Branch name: Something</li>
          </ul>
        </div>
      </div>
      <CommitList commits={commitList} />

      <Commit name='Bob' message='PEACE' date='today'></Commit>
    </div>
  );
}

export default App;
