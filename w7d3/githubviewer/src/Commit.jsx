import React from "react";

export const Commit = props => {
  const { message, name, date } = props;
  return (
    <li>
      <h1>Commit message: {message}</h1>
      <h2>By: {name}</h2>
      <h3>On: {date}</h3>
    </li>
  );
};
