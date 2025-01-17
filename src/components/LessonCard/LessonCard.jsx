import Button from "../Button/Button";
import "./styles.css";

//именованный импорт, кот требует соблюдения имени, с которым происходил экспорт
//имя экспортируемых данных берётся в фигурные скобки
import { lessonData } from "./data";

function LessonCard() {
  //до return мы прописываем логику
  console.log(lessonData);  
  return (
    <div className="lessonCard-wrapper">
      <img src={lessonData.lesson_image} width='150px'></img>
      <h3>Lesson: {lessonData.lesson_number}</h3>
      <div><b>Topic:</b> {lessonData.topic}</div>
      <div><b>Teacher:</b> {lessonData.teacher}</div>
      <Button />
    </div>
  );
}

export default LessonCard;
