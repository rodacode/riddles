import React from "react";
import { render, screen } from "@testing-library/react";
import riddleMock from "../../mocks/riddleMock";
import RiddleList from "./RiddleList";

describe("Riddle List [ Component ]", () => {
  beforeEach(() => {
    render(<RiddleList riddles={riddleMock} />);
  });

  test("It should render the list container", () => {
    expect(screen.queryByTestId("riddle__list")).toBeInTheDocument();
  });

  test("It should render a list of 5 riddle cards", () => {
    expect(screen.queryAllByTestId("card__container")).toHaveLength(5);
  });
});
