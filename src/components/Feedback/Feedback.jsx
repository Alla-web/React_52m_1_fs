import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const onLikeClick = () => {
    setLikes((prevState) => prevState + 1);  };


  const [dislikes, setDislikes] = useState(0);
  const onDislikeClick = ()=>{
    setDislikes((prevState)=>prevState+1);
  };

  const onResetClick = ()=>{
    setLikes(0)
    setDislikes(0)
  }

  return (
    <div className="feedback-container">
      <div className="container">
        <div className="result-container">{likes}</div>
        <div className="hw4-button-container">
          <Button name="Like" onClick={onLikeClick} />
        </div>
      </div>
      <div className="container">
        <div className="hw4-button-container">
          <Button name="Dislike"  onClick={onDislikeClick}/>
        </div>
        <div className="result-container">{dislikes}</div>
      </div>
      <div className="hw4-button-container">
        <Button name="Reset Results" onClick={onResetClick}/>
      </div>
    </div>
  );
}

export default Feedback;
