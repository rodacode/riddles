import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import RiddleCard from "./RiddleCard";
import riddleMock from "../../mocks/riddleMock";

describe("RiddleCard [Component]", () => {

beforeEach(() => {
    render(<RiddleCard riddle={riddleMock[0]}/>)
})

  test("Should render the component", () => {

    expect(screen.getByTestId("card__container")).toBeInTheDocument();
  });

  test("Should render the text", () => {

    expect(screen.getByTestId("card__text")).toBeInTheDocument();
  })

  test("Should show the  show hint text and the show answer text", () => {

    expect(screen.queryByText(/Mostrar pista/)).toBeInTheDocument()
    expect(screen.queryByText(/Mostrar respuesta/)).toBeInTheDocument()

  })

  test("Should render the show hint button", () => {

    expect(screen.queryByTestId("show_hint_button")).toBeInTheDocument();
  })

  test("Should display the hint once the show hint button is clicked", () => {

    const showHintButton = screen.getByTestId("show_hint_button");

    userEvent.click(showHintButton);

    expect(screen.queryByTestId("card__hint")).toBeInTheDocument()
  });

  test("Should display the answer once the show answer button is clicked", () => {

    const showAnswerButton = screen.getByTestId("show_answer_button");

    userEvent.click(showAnswerButton);

    expect(screen.queryByTestId("card__answer")).toBeInTheDocument()
  });

  

});
