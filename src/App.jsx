import "./App.css";
// импорт компонента по умолчанию (название компонента можно заменить на любое другое (псевдоним),
// но с большой буквы)
// import Button from "./components/Button/Button";

//Lessons
// import Lesson_02 from "./components/lessons/lesson_02/Lesson_02";
// import Lesson_03 from "./components/lessons/lesson_03/Lesson_03";
// import Lesson_04 from "./components/lessons/lesson_04/Lesson_04";

//Homeworks
// import Homework02 from "./homeworks/homework02/Homework02";
// import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";


//Consultations
import Consultation_02 from "./consultation/Consultation_02/Consultation_02";

function App() {
  return (
    //при на личие нескольких элементов требуется обязательно обёртка, можно без стилизации
    <div className="app">
      {/* <Button />
      <Button />
      <Button />
      ------Topic: Components
      <Lesson_02 /> */}
      {/* <Homework02 /> */}
      {/* ------Topic:  Props */}
      {/* <Lesson_03 /> */}
      {/* <Homework03/> */}
      {/* ------Topic: functions, hocks(useStates) */}
      {/* <Lesson_04/> */}
      {/* <Consultation_02/> */}
      <Homework04/>
    </div>
  );
}

export default App;
