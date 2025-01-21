import Button from "../Button/Button";
import "./styles.css";

//1 шаг - импорт хука useState (исп-т состояние) из React
import { useState } from "react";

function Counter() {
  //2-й шаг - вызываем hoock useState внутри компонента и передаём в него (в круглые скобки)
  // первоначальное состояние - initial state - (значение при старте страницы)
  //при вызове useState возвращает массив, записыванем его в переменную, из всегда 2-х элементовЖ
  //1) значение состояния
  //2) функция, которая может изменять значение состояния
  //   const counterStateArr = useState(2);
  //   console.log(counterStateArr);
  // делаем деструктуризацию сразу, без присвоения массива в переменную, записывая справа от = useState(2)

  //деструктурируем полученный массив из 2-х элементов
  const [counter, setCounter] = useState(0);

  //3-й шаг - создаём функции, которые будут изменять состояние элемента
  const onPlusClick = () => {
    //есть 2 варианта использования функции по изм-ю состояния элемента
    //1-й - передача нового значения в вызов
    // setCounter(45);

    //2-й - передача в setCounter функции callback,
    // новое значение состояния должно быть вычислено на основе предыдущего состояния
    //prevState++ использовать нельзя - будет багом
    //нужно не забывать возвращать значение prevState в функции callback
    //функция setCounter работает только с одним аргументом - состоянием элемента
    if (counter < 10) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const onMinusClick = () => {
    if (counter > -10){
        setCounter((prevState) => prevState - 1);
    }    
  };

  return (
    <div className="counter-container">
      <div className="button-container">
        <Button name="-" type="button" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-container">
        <Button name="+" type="button" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
