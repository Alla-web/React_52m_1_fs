//сборщик упрощает импорт стилей только в компонент
import "./styles.css";

//Lesson_03
//гибкий вариант кнопок - меняются названия кнопок
//объект Props передаётся как параметр в круглые скобки при создании компонента
// const props = {
//   name: <значение свойства будет передано при вызове компонента>
// }

//Деструктуризация 2-й вариант со значением свойства по умолчанию после равно
function Button({ name='SEND', type='button', onClick }) {
  
  //Деструктуризация
  //1-й вариант
  // const {name} = Props;

  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

//не гибкий вариант кнопки - для изменения названия возможно только 2 варианта,
//реализованные через тернарный оператор

// function Button() {
//   const isGetButton = true;
//   const buttonType = 'submit';

//   //маленький возврат без скобок
//   //большой возврат берётся в скобки по слова return
//   return (
//     <button className="main-button" type={buttonType}>{isGetButton ? "GET" : "SEND"}</button>
//   );
// }

// //экспорт по умолчанию
// //такой эекспорт должен быть только один
// export default Button;
