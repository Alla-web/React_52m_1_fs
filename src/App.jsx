import "./App.css";
//импорт компонента по умолчанию (название компонента можно заменить на любое другое (псевдоним),
//но с большой буквы)
import Button from "./components/Button/Button";
import Lesson_02 from "./components/lessons/lesson_02/Lesson_02";

function App() {
  return (
    //при на личие нескольких элементов требуется обязательно обёртка, можно без стилизации
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      <Lesson_02 />
    </div>
  );
}

export default App;
