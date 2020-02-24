import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  waitForElement,
  queryByTestId,
  getAllByRole
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

// Building a rock paper scissor game

// 🗿 🪓 🌴

// Axe beats tree
// Tree beats Moai Statue
// Moai Statue beats the Axe

// 2 players
// each choose between the three possibilities
// hidden from each other

// compare, choose a winner based on result

// DEATHMATCH

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Shows a title + start game button on first load", () => {
  const title = "Welcome to Moai vs Axe vs Tree";
  const buttonText = "Start game";
  const { getByText, queryByText, queryByRole } = render(<App />);

  expect(getByText(title)).toBeTruthy();
  expect(queryByRole("button")).toHaveTextContent(buttonText);
  expect(queryByText("🌴")).toBeNull();
});

it("shows the three options after clicking start game", () => {
  const { getByText, queryByText, queryByRole, queryByTestId } = render(
    <App />
  );

  queryByRole("button").click();

  expect(queryByTestId("🌴")).toHaveTextContent("🌴");
  expect(queryByTestId("🪓")).toHaveTextContent("🪓");
  expect(queryByTestId("🗿")).toHaveTextContent("🗿");
});

it("runs a full game without crashing and shows the right result", () => {
  const {
    getByText,
    queryByText,
    queryByRole,
    queryByTestId,
    findByText
  } = render(<App />);

  queryByRole("button").click();

  queryByTestId("🌴").click();
  queryByTestId("🌴").click();

  expect(findByText("Tied")).toBeTruthy();
});
