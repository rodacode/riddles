import React, { useState } from "react";
import "./riddleCard.scss";

const RiddleCard = ({ riddle }) => {
  const { text, hint, answer } = riddle;
  const [displayHint, setDisplayHint] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <>
      {riddle ? (
        <div data-testid="card__container" className="card__container">
          <div data-testid="card__text">
            <p>{text}</p>
          </div>
          <div className="card__bottom">
            <div
              data-testid="card__hint"
              onClick={() => setDisplayHint(!displayHint)}
            >
              {displayHint ? (
                <span>{hint}</span>
              ) : (
                <span data-testid="show_hint_button">💡 Mostrar pista</span>
              )}
            </div>

            <div
              data-testid="card__answer"
              onClick={() => setDisplayAnswer(!displayAnswer)}
            >
              {displayAnswer ? (
                <span>{answer}</span>
              ) : (
                <span data-testid="show_answer_button">Mostrar respuesta</span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RiddleCard;
