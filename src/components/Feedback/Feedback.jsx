import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  console.log("rerendering");
  

  const onLikeClick = () => {
    setLikes((prevState) => prevState + 1);
  };

  const onDislikeClick = () => {
    setDislikes((prevState) => prevState + 1);
  };

  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="counter-container">
        <div className="container">
          <div className="result-container">{likes}</div>
          <div className="hw4-button-container">
            <Button name="Like" onClick={onLikeClick} />
          </div>
        </div>
        <div className="container">
          <div className="result-container">{dislikes}</div>
          <div className="hw4-button-container">
            <Button name="Dislike" onClick={onDislikeClick} />
          </div>
        </div>
      </div>
      <div className="hw4-button-container resetButton-container">
        <Button name="RESET RESULTS" onClick={onResetClick} />
      </div>
    </div>
  );
}

export default Feedback;
