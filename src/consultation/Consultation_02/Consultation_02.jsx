import "./styles.css";
import Button from "../../components/Button/Button";
import { useState } from "react";

function Consultation_02() {
  const [ingredients, setIngredients] = useState([]);

  const onAddCheese = () => {
    setIngredients((prevState) => {
      return [...prevState, "cheese, "];
    });
  };

  const onAddMeat = () => {
    setIngredients((prevState) => {
      return [...prevState, "meat, "];
    });
  };

  const onAddSalad = () => {
    setIngredients((prevState) => {
      return [...prevState, "salad, "];
    });
  };

  return (
    <div className="consultation02-container">
      <p className="ingredients">{ingredients}</p>
      <div className="button-container">
        <Button name="Add cheese" onClick={onAddCheese}/>
        <Button name="Add meat" onClick={onAddMeat}/>
        <Button name="Add salad" onClick={onAddSalad}/>
      </div>
    </div>
  );
}

export default Consultation_02;
