import React from "react";
import riddleMock from "../../mocks/riddleMock";
import RiddleCard from "../riddleCard/RiddleCard";
import './riddleList.scss';

const RiddleList = () => {
  return (
    <div data-testid="riddle__list" className="riddle__list">
        <h2 className="riddle__list__title">Adivinanzas de Frutas y Verduras</h2>
      {riddleMock.map((riddle,index) => 
        <RiddleCard key={index}riddle={riddle} />
      )}
    </div>
  );
};

export default RiddleList;
