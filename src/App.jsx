import "./App.css";

//импорт компонента по умолчанию (название компонента можно заменить на любое другое (псевдоним),
//но с большой буквы)

// import Button from "./components/Button/Button";

//Lessons
// import Lesson_02 from "./components/lessons/lesson02/Lesson_02";
// import Lesson_03 from "./components/lessons/lesson03/Lesson_03";
// import Lesson_04 from "./components/lessons/lesson04/Lesson_04";
// import Lesson05 from "./components/lessons/lesson05/Lesson05";

//Homeworks
// import Homework02 from "./homeworks/homework02/Homework02";
// import Homework03 from "./homeworks/homework03/Homework03";
// import Homework04 from "./homeworks/homework04/Homework04";
import Homework05 from "./homeworks/homework05/Homework05";

//Consultations
// import Consultation_02 from "./consultation/Consultation_02/Consultation_02";

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
      {/* <Homework04/> */}
      {/* ------Topic: map components */}
      {/* <Lesson05/> */}
      <Homework05 />

    </div>
  );
}

export default App;
