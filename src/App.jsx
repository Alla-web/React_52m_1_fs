import "./App.css";
//импорт компонента по умолчанию (название компонента можно заменить на любое другое (псевдоним),
//но с большой буквы)
// import Button from "./components/Button/Button";

//Lessons
// import Lesson_02 from "./components/lessons/lesson_02/Lesson_02";

//Homeworks
// import Homework02 from "./homeworks/homework02/Homework02";
// import Lesson_03 from "./components/lessons/lesson_03/Lesson_03";
import Homework03 from "./homeworks/homework03/Homework03";

function App() {
  return (
    //при на личие нескольких элементов требуется обязательно обёртка, можно без стилизации
    <div className="app">
      {/* <Button />
      <Button />
      <Button />
      topic: Components
      <Lesson_02 /> */}
      {/* <Homework02 /> */}
      {/* topic: Props */}
      {/* <Lesson_03 /> */}
      <Homework03/>
    </div>
  );
}

export default App;
