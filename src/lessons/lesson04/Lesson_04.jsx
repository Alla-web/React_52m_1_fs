import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import "./styles.css";

function Lesson_04() {
  const showMessage = () => {
    alert("Function outer click");
  };

  const showCustomMessage = (name) => {
    alert(`Function outher click - ${name}`);
  };

  return (
    <div className="lesson04-container">
      <Counter />

      <div className="buttons-container">
        {/* Пример 1 - создание функции внутри вызова кнопки */}
        <Button
          name="Button with inner func"
          type="button"
          onClick={() => alert("Function inner")}
        />
        {/* Пример 2 - создание функции вне кнопки и передача функции в prop*/}
        <Button
          name="Button with outer func"
          type="button"
          onClick={()=>{}}
        />
        {/* Пример 3 - создание функции с параметром вне кнопки и передача функции в prop*/}
        <Button
          name="Button with parameters"
          type="button"
          onClick={() => {
            showCustomMessage("Bob");
          }}
          //вызов функции берём в обычную стрелочную функцию для её срабатывания именно в момент нажатия кнопки
        />
      </div>
    </div>
  );
}

export default Lesson_04;
